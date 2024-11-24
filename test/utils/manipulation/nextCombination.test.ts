import { describe, expect, it } from 'vitest'
import nextCombination from '../../../src/utils/manipulation/nextCombination'
import { INT32_MIN } from '../../../src/constants'

describe('nextCombination', () => {
  it('should return the correct next combination for small numbers', () => {
    // Single-bit numbers
    expect(nextCombination(1)).toBe(2) // 0001 -> 0010
    expect(nextCombination(2)).toBe(4) // 0010 -> 0100

    // Two-bit numbers
    expect(nextCombination(3)).toBe(5) // 0011 -> 0101
    expect(nextCombination(6)).toBe(9) // 0110 -> 1001
  })

  it('should handle edge cases', () => {
    expect(nextCombination(0)).toBe(1) // No bits set
    expect(nextCombination(1 << 30)).toBe(INT32_MIN) // Largest possible single bit
  })

  it('should handle multi-bit numbers correctly', () => {
    expect(nextCombination(7)).toBe(11) // 0111 -> 1011
    expect(nextCombination(14)).toBe(19) // 1110 -> 10011
    expect(nextCombination(23)).toBe(27) // 10111 -> 11011
  })
})
