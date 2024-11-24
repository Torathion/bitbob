import { describe, expect, it } from 'vitest'
import unsignedModPow2 from '../../../src/utils/math/unsignedModPow2'

describe('unsignedModPow2', () => {
  it('returns the unsigned remainder when x is divided by a power of 2', () => {
    expect(unsignedModPow2(5, 4)).toBe(1) // 5 % 4 = 1
    expect(unsignedModPow2(10, 8)).toBe(2) // 10 % 8 = 2
    expect(unsignedModPow2(25, 16)).toBe(9) // 25 % 16 = 9
  })

  it('returns the correct result for negative x values', () => {
    expect(unsignedModPow2(-1, 4)).toBe(3) // (-1 & (4 - 1)) + 4 = 3
    expect(unsignedModPow2(-10, 8)).toBe(6) // (-10 & (8 - 1)) + 8 = 6
  })

  it('returns -1 when power is not a power of 2', () => {
    expect(unsignedModPow2(5, 3)).toBe(-1) // 3 is not a power of 2
    expect(unsignedModPow2(10, 7)).toBe(-1) // 7 is not a power of 2
    expect(unsignedModPow2(25, 9)).toBe(-1) // 9 is not a power of 2
  })

  it('returns -1 for zero or negative powers of 2', () => {
    expect(unsignedModPow2(5, 0)).toBe(-1) // 0 is not a power of 2
    expect(unsignedModPow2(10, -2)).toBe(-1) // Negative numbers are not powers of 2
  })

  it('handles large numbers correctly', () => {
    expect(unsignedModPow2(1000000, 512)).toBe(64) // 1000000 % 512 = 448
    expect(unsignedModPow2(123456789, 256)).toBe(21) // 123456789 % 256 = 123
  })

  it('handles powers of 2 correctly for all valid inputs', () => {
    expect(unsignedModPow2(7, 2)).toBe(1) // 7 % 2 = 1
    expect(unsignedModPow2(15, 8)).toBe(7) // 15 % 8 = 7
    expect(unsignedModPow2(100, 64)).toBe(36) // 100 % 64 = 36
  })
})
