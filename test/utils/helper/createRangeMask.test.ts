import { describe, expect, it } from 'vitest'
import createRangeMask from '../../../src/utils/helper/createRangeMask'

describe('createRangeMask', () => {
  it('should create a mask with a range of set bits', () => {
    expect(createRangeMask(0, 3)).toBe(0b1111) // 1111 (bits 0-3)
    expect(createRangeMask(2, 5)).toBe(0b111100) // 111000 (bits 2-5)
    expect(createRangeMask(5, 7)).toBe(0b11100000) // 11100000 (bits 5-7)
    expect(createRangeMask(4, 6)).toBe(0b1110000) // 1110000 (bits 4-6)
  })

  it('should return a single bit for the case where start == end', () => {
    expect(createRangeMask(3, 3)).toBe(0b1000) // 1000 (bit 3 only)
    expect(createRangeMask(7, 7)).toBe(0b10000000) // 10000000 (bit 7 only)
  })

  it('should handle zero-length ranges', () => {
    expect(createRangeMask(0, 0)).toBe(0b1) // 1 (bit 0 only)
    expect(createRangeMask(2, 2)).toBe(0b100) // 100 (bit 2 only)
  })
})
