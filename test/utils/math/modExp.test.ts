import { describe, expect, it } from 'vitest'
import modExp from '../../../src/utils/math/modExp'

describe('modExp', () => {
  it('should return 1 for x^0 % mod', () => {
    expect(modExp(5, 0, 7)).toBe(1) // Any number to the power of 0 is 1
  })

  it('should return x % mod when y is 1', () => {
    expect(modExp(5, 1, 7)).toBe(5) // x^1 % mod = x % mod
  })

  it('should handle x = 0 correctly', () => {
    expect(modExp(0, 5, 7)).toBe(0) // 0 raised to any positive power is 0
  })

  it('should handle y = 0 correctly', () => {
    expect(modExp(5, 0, 7)).toBe(1) // Any non-zero number raised to 0 is 1
  })

  it('should handle mod = 1 correctly', () => {
    expect(modExp(5, 3, 1)).toBe(0) // Any number modulo 1 is 0
  })

  it('should work with positive x, y, mod', () => {
    expect(modExp(2, 10, 1000)).toBe(24) // Test for 2^10 % 1000
    expect(modExp(3, 7, 13)).toBe(3) // Test for 3^7 % 13
  })

  it('should handle large exponents', () => {
    expect(modExp(2, 1000000, 1000007)).toBe(21861) // A large exponent
  })

  it('should handle large moduli', () => {
    expect(modExp(2, 10, 1000000007)).toBe(1024) // Test for large moduli
  })

  it('should work with prime moduli', () => {
    expect(modExp(7, 3, 13)).toBe(5) // Test for 7^3 % 13
    expect(modExp(5, 5, 17)).toBe(14) // Test for 5^5 % 17
  })

  it('should work for large numbers and negative results', () => {
    expect(modExp(987654321, 123456789, 1000000007)).toBe(389168268) // Larger values
  })
})
