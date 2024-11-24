import { describe, expect, it, test } from 'vitest'
import ComposedNumber from '../../src/classes/ComposedNumber'
import { INT32_MAX } from '../../src/constants'
import { IndexOutOfBoundsError, StorageOverflowError, ValueOutOfBoundsError } from '../../src/errors'

describe('ComposedNumber', () => {
  it('can store numbers', () => {
    const cn = new ComposedNumber()
    cn.set(1)
    cn.set(2)

    expect(cn.state).toBe(5)
    expect(cn.pointers).toEqual([0, 1, 3])
    expect(cn.storedNumbers).toBe(2)
  })

  it('can retrieve numbers', () => {
    const cn = new ComposedNumber()
    cn.set(4)
    cn.set(3)

    expect(cn.get(0)).toBe(4)
    expect(cn.get(1)).toBe(3)
    expect(cn.storedNumbers).toBe(2)
  })

  it('can reserve bigger spaces for smaller numbers', () => {
    const cn = new ComposedNumber()
    cn.set(1, 8)
    cn.set(2, 8)
    cn.set(3, 8)
    cn.set(4, 8)

    expect(cn.availableSpace).toBe(4) // It will only use the first 4 bits, the other stay free
    expect(cn.pointers).toEqual([0, 8, 16, 24, 32])
    expect(cn.state).toBe(0b1000_00000110_0000010_00000001)

    expect(cn.get(0)).toBe(1)
    expect(cn.get(1)).toBe(2)
    expect(cn.get(2)).toBe(3)
    expect(cn.get(3)).toBe(4)
  })

  it('can check the available space left', () => {
    expect(new ComposedNumber(1 << 31).availableSpace).toBe(0) // Full (1 << 31)
    expect(new ComposedNumber(1 << 31).usedSpace).toBe(31)
    expect(new ComposedNumber().availableSpace).toBe(31) // Empty

    const cn = new ComposedNumber()
    cn.set(7) // 111
    cn.set(15) // 1111

    expect(cn.usedSpace).toBe(7)
    expect(cn.availableSpace).toBe(31 - cn.usedSpace) // 31 - 7
  })

  it('throws an StorageOverflowError, if the storage limit exceeds', () => {
    expect(() => new ComposedNumber(INT32_MAX).set(INT32_MAX)).toThrow(StorageOverflowError) // Already full from the start

    const cn = new ComposedNumber()
    cn.set(234)

    expect(() => cn.set(INT32_MAX)).toThrow(StorageOverflowError)
  })

  test('store and retrieve HD screen resolutions', () => {
    const cn = new ComposedNumber()
    cn.set(1020)
    cn.set(1980)
    expect(cn.state).toBe(0b11110111100_1111111100) // 11110111100 and 1111111100
    expect(cn.pointers).toEqual([0, 10, 21]) // 1020 is 10 bit, 1980 is 11 bit

    expect(cn.get(0)).toBe(1020)
    expect(cn.get(1)).toBe(1980)

    expect(() => cn.get(11111)).toThrow(IndexOutOfBoundsError)
  })

  it('can clear the whole storage', () => {
    const cn = new ComposedNumber()

    for (let i = 0; i < 10; i++) cn.set(i)

    expect(cn.state).toBe(0b1001_1000_111_110_101_100_11_10_1_0) // All numbers from 0 to 9 (reading from right to left)
    expect(cn.pointers).toEqual([0, 1, 2, 4, 6, 9, 12, 15, 18, 22, 26])
    expect(cn.storedNumbers).toBe(10)

    cn.clear()

    expect(cn.state).toBe(0)
    expect(cn.pointers).toEqual([0]) // The first pointer should remain to get the start position of the first number
  })

  it('can update a value', () => {
    const cn = new ComposedNumber()
    cn.set(2, 8) // Set the value 2, but reserve 8 bits
    cn.update(0, 200)
    expect(cn.get(0)).toBe(200)

    // Update middle number
    const cn1 = new ComposedNumber()
    cn1.set(1, 8)
    cn1.set(2, 8)
    cn1.set(3, 8)
    cn1.update(1, 200)
    expect(cn1.get(0)).toBe(1)
    expect(cn1.get(1)).toBe(200)
    expect(cn1.get(2)).toBe(3)

    // Update last number
    const cn2 = new ComposedNumber()
    cn2.set(1, 8)
    cn2.set(2, 8)
    cn2.set(3, 8)
    cn2.update(2, 200)
    expect(cn2.get(0)).toBe(1)
    expect(cn2.get(1)).toBe(2)
    expect(cn2.get(2)).toBe(200)
  })

  it('searches can search for numbers inside itself', () => {
    const cn = new ComposedNumber()

    cn.set(5)
    cn.set(3)
    cn.set(19)
    cn.set(1)
    cn.set(45)
    cn.set(12)

    expect(cn.has(1)).toBe(true)
    expect(cn.has(2)).toBe(false)
    expect(cn.has(12345)).toBe(false)
    expect(cn.has(45)).toBe(true)
    expect(cn.has(cn.state)).toBe(false)
  })

  it('can remove numbers from the store', () => {
    const cn = new ComposedNumber()
    cn.set(7)
    cn.set(12)
    cn.set(55)
    cn.set(1)
    cn.set(11)

    expect(cn.availableSpace).toBe(13)

    cn.remove(3)
    expect(cn.availableSpace).toBe(13)
    expect(cn.get(3)).toBe(0)
  })

  it('can overwrite the entire state', () => {
    // 1. Wipe
    const cn = new ComposedNumber()

    cn.set(1)
    cn.set(2)
    cn.set(3)

    expect(cn.availableSpace).toBe(26)
    expect(cn.pointers).toEqual([0, 1, 3, 5])

    cn.overwrite(0, [0])
    expect(cn.availableSpace).toBe(31)
    expect(cn.pointers).toEqual([0])

    // 2. Renew state

    const cn1 = new ComposedNumber()

    cn1.set(4)
    cn1.set(5)
    cn1.set(6)

    expect(cn1.availableSpace).toBe(22)
    expect(cn1.pointers).toEqual([0, 3, 6, 9])

    cn1.overwrite(7 | (8 << 3) | (9 << 7), [0, 3, 7, 11])

    expect(cn1.availableSpace).toBe(20)
    expect(cn1.pointers).toEqual([0, 3, 7, 11])
  })

  it('can be copied', () => {
    const cn = new ComposedNumber()
    cn.set(9)
    cn.set(10)
    cn.set(11)

    const cn1 = cn.copy()

    // Same values
    expect(cn.availableSpace).toBe(cn1.availableSpace)
    expect(cn.state).toBe(cn1.state)
    expect(cn.pointers).toEqual(cn1.pointers)

    // Not the same reference
    expect(cn).not.toBe(cn1)
    expect(cn.pointers).not.toBe(cn1.pointers)
  })

  it('can find the index of a stored number', () => {
    const cn = new ComposedNumber()

    for (let i = 0; i < 10; i++) cn.set(i)

    expect(cn.indexOf(0)).toBe(0)
    expect(cn.indexOf(1)).toBe(1)
    expect(cn.indexOf(5)).toBe(5)
    expect(cn.indexOf(9)).toBe(9)
    expect(cn.indexOf(10)).toBe(-1)
  })

  it('throws, if you store too much', () => {
    const cn = new ComposedNumber()

    cn.set(2147483647) // Maximum 31bit number
  })

  it('throws, if you update a value that is bigger than before', () => {
    const cn = new ComposedNumber()
    cn.set(15) // 1111
    expect(() => cn.update(0, 15 + 1)).toThrow(ValueOutOfBoundsError) // 10000 is one bit bigger than the pointer range.
  })

  it('throws, if you update out of bounds', () => {
    expect(() => new ComposedNumber().update(11111, 11111)).toThrow(IndexOutOfBoundsError)
  })

  it('throws, if you remove out of bounds', () => {
    expect(() => new ComposedNumber().remove(111111)).toThrow(IndexOutOfBoundsError)
  })
})
