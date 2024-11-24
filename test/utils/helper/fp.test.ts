import { describe, test, expect } from 'vitest'
import { add, and, div, identity, leftShift, mod, mult, not, or, pow, rightShift, signed, unsigned, xor } from '../../../src/utils/helper/fp'

describe('Math and Bitwise Functions', () => {
  test('add', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
  })

  test('and', () => {
    expect(and(5, 3)).toBe(1)
    expect(and(6, 2)).toBe(2)
  })

  test('div', () => {
    expect(div(6, 3)).toBe(2)
    expect(div(7, 2)).toBe(3.5)
  })

  test('identity', () => {
    expect(identity(5)).toBe(5)
    expect(identity(-1)).toBe(-1)
  })

  test('leftShift', () => {
    expect(leftShift(2, 1)).toBe(4)
    expect(leftShift(3, 2)).toBe(12)
  })

  test('mod', () => {
    expect(mod(7, 3)).toBe(1)
    expect(mod(10, 5)).toBe(0)
  })

  test('mult', () => {
    expect(mult(2, 3)).toBe(6)
    expect(mult(-2, 4)).toBe(-8)
  })

  test('not', () => {
    expect(not(0)).toBe(-1)
    expect(not(1)).toBe(-2)
  })

  test('or', () => {
    expect(or(5, 3)).toBe(7)
    expect(or(4, 2)).toBe(6)
  })

  test('pow', () => {
    expect(pow(2, 3)).toBe(8)
    expect(pow(5, 0)).toBe(1)
  })

  test('rightShift', () => {
    expect(rightShift(8, 1)).toBe(4)
    expect(rightShift(7, 2)).toBe(1)
  })

  test('signed', () => {
    expect(signed(2147483648)).toBe(-2147483648)
    expect(signed(-1)).toBe(-1)
  })

  test('unsigned', () => {
    expect(unsigned(-1)).toBe(4294967295)
    expect(unsigned(1)).toBe(1)
  })

  test('xor', () => {
    expect(xor(5, 3)).toBe(6)
    expect(xor(6, 2)).toBe(4)
  })
})
