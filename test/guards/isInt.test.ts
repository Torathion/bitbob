import { describe, expect, it } from 'vitest'
import isInt from '../../src/guards/isInt'

describe('isInt', () => {
  it('should return true for valid 32-bit integers', () => {
    expect(isInt(0)).toBe(true) // 0 is a valid 32-bit integer
    expect(isInt(42)).toBe(true) // 42 is a valid 32-bit integer
    expect(isInt(-42)).toBe(true) // -42 is a valid 32-bit integer
    expect(isInt(2147483647)).toBe(true) // Max 32-bit integer value
    expect(isInt(-2147483648)).toBe(true) // Min 32-bit integer value
  })

  it('should return false for non-integer numbers', () => {
    expect(isInt(1.25)).toBe(false) // Non-integer
    expect(isInt(-1.25)).toBe(false) // Non-integer
    expect(isInt(3.14159)).toBe(false) // Non-integer (pi)
  })

  it('should return false for non-integer floating-point numbers', () => {
    expect(isInt(Infinity)).toBe(false) // Infinity is not an integer
    expect(isInt(-Infinity)).toBe(false) // -Infinity is not an integer
    expect(isInt(NaN)).toBe(false) // NaN is not an integer
  })

  it('should return false for numbers beyond the 32-bit integer range', () => {
    expect(isInt(2147483648)).toBe(false) // Larger than 32-bit integer range
    expect(isInt(-2147483649)).toBe(false) // Smaller than 32-bit integer range
  })
})
