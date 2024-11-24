import { describe, expect, it } from 'vitest'
import isPow4 from '../../src/guards/isPow4'

describe('isPow4', () => {
  it('should return true for powers of 4', () => {
    expect(isPow4(1)).toBe(true) // 4^0 = 1
    expect(isPow4(4)).toBe(true) // 4^1 = 4
    expect(isPow4(16)).toBe(true) // 4^2 = 16
    expect(isPow4(64)).toBe(true) // 4^3 = 64
    expect(isPow4(1024)).toBe(true) // 4^5 = 1024
  })

  it('should return false for non-powers of 4', () => {
    expect(isPow4(2)).toBe(false) // Not a power of 4
    expect(isPow4(3)).toBe(false) // Not a power of 4
    expect(isPow4(5)).toBe(false) // Not a power of 4
    expect(isPow4(8)).toBe(false) // Not a power of 4
    expect(isPow4(10)).toBe(false) // Not a power of 4
    expect(isPow4(15)).toBe(false) // Not a power of 4
    expect(isPow4(18)).toBe(false) // Not a power of 4
  })

  it('should return false for zero', () => {
    expect(isPow4(0)).toBe(false) // 0 is not a power of 4
  })

  it('should return false for negative numbers', () => {
    expect(isPow4(-4)).toBe(false) // Negative numbers can't be powers of 4
    expect(isPow4(-16)).toBe(false) // Negative numbers can't be powers of 4
  })

  it('should return true for large powers of 4', () => {
    expect(isPow4(4 ** 15)).toBe(true) // Test for large powers of 4
  })

  it('should handle the edge case for large numbers (positive 32-bit signed integers)', () => {
    expect(isPow4(0x40000000)).toBe(true) // Large power of 4 within the range of 32-bit integers
  })
})
