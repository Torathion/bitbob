import { describe, expect, it } from 'vitest'
import leastSet from '../../../src/utils/measurement/leastSet'

describe('leastSet', () => {
  it('should return the correct position for numbers with one bit set', () => {
    expect(leastSet(1)).toBe(1) // Binary: 0001
    expect(leastSet(2)).toBe(2) // Binary: 0010
    expect(leastSet(4)).toBe(3) // Binary: 0100
    expect(leastSet(8)).toBe(4) // Binary: 1000
  })

  it('should return the position of the least significant set bit for multi-bit numbers', () => {
    expect(leastSet(3)).toBe(1) // Binary: 0011 -> Least set bit is at position 1.
    expect(leastSet(10)).toBe(2) // Binary: 1010 -> Least set bit is at position 2.
    expect(leastSet(20)).toBe(3) // Binary: 10100 -> Least set bit is at position 3.
    expect(leastSet(40)).toBe(4) // Binary: 101000 -> Least set bit is at position 4.
  })

  it('should return 0 for numbers with no set bits (0)', () => {
    expect(leastSet(0)).toBe(0) // No set bits
  })

  it('should handle large numbers correctly', () => {
    expect(leastSet(1024)).toBe(11) // Binary: 1 followed by 10 zeros -> Position 11.
    expect(leastSet(1 << 30)).toBe(31) // Largest single-bit set in a 32-bit number -> Position 31.
  })
})
