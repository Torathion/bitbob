import { describe, expect, it, test } from 'vitest'
import Bitmap from '../../src/classes/Bitmap'
import rotateLeft from '../../src/utils/manipulation/rotateLeft'

describe('Bitmap', () => {
  it('can create', () => {
    expect(() => new Bitmap()).not.toThrowError()
  })

  it('can set a state', () => {
    const bitmap = new Bitmap()
    bitmap.set(2)

    expect(bitmap.state).not.toBe(0)
    expect(bitmap.state).toBe(4) // 100

    bitmap.set(4)
    expect(bitmap.state).toBe(20) // 10100
  })

  it('can check if a flag is set', () => {
    const bitmap = new Bitmap()

    bitmap.set(2)

    expect(bitmap.isSet(2)).toBe(true)
  })

  it('can unset a flag', () => {
    const bitmap = new Bitmap()
    bitmap.set(2)

    expect(bitmap.isSet(2)).toBe(true)

    bitmap.unset(2)

    expect(bitmap.isSet(2)).toBe(false)
  })

  it('can toggle a flag', () => {
    const bitmap = new Bitmap()
    bitmap.toggle(2)

    expect(bitmap.isSet(2)).toBe(true)

    bitmap.toggle(2)

    expect(bitmap.isSet(2)).toBe(false)
  })

  it('can rest the whole state map', () => {
    const bitmap = new Bitmap()
    bitmap.set(0)
    bitmap.set(1)
    bitmap.set(2)
    bitmap.set(4)

    expect(bitmap.state).not.toBe(0)

    bitmap.clear()

    expect(bitmap.state).toBe(0)
  })

  it('can apply multiple flags at once', () => {
    const bitmap = new Bitmap()
    bitmap.apply(4 | 2) // set third and second flag to have the state 110
    expect(bitmap.state).toBe(6)
  })

  it('checks if a subset of a state meets some criteria', () => {
    const bitmap = new Bitmap()
    bitmap.apply(2 | 4 | 8 | 64 | 256) // 334 -> 101001110

    expect(bitmap.isMet(14)).toBe(true) // 14 = 1110 is included in 334
    expect(bitmap.isMet(320)).toBe(true) // 320 = 101000000 is included in 334
    expect(bitmap.isMet(1)).toBe(false)
  })

  it('flips the entire state map', () => {
    const bitmap = new Bitmap(0b1111111111111111111111111111111)
    bitmap.flip()
    expect(bitmap.state).toBe(0)

    bitmap.clear() // set to 0
    bitmap.flip() // Activate all states
    expect(bitmap.state).toBe(0b1111111111111111111111111111111)

    bitmap.clear()
    bitmap.apply(0b1111000011110000111100001111000)
    bitmap.flip()
    expect(bitmap.state).toBe(0b0000111100001111000011110000111)
  })

  it('can count the number of activated flags', () => {
    const bitmap = new Bitmap()

    expect(bitmap.activeStates).toBe(0)

    bitmap.apply(0b1111111111111111111111111111111)
    expect(bitmap.activeStates).toBe(31)

    bitmap.clear()
    bitmap.apply(2 | 4 | 8 | 64 | 256)
    expect(bitmap.activeStates).toBe(5)
  })

  it('can flip a field of flags', () => {
    const bitmap = new Bitmap()

    bitmap.flipRange(0, 3)
    expect(bitmap.state).toBe(15)

    bitmap.flipRange(0, 3)
    expect(bitmap.state).toBe(0)
  })

  test('state can be altered raw', () => {
    const bitmap = new Bitmap()

    bitmap.apply(2 | 4 | 8 | 64 | 256) // 334 -> 101001110
    bitmap.state = rotateLeft(bitmap.state, 1)

    expect(bitmap.state).toBe(0b1010011100)
  })
})
