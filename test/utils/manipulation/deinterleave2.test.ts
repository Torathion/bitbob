import { describe, expect, it } from 'vitest'
import deinterleave2 from '../../../src/utils/manipulation/deinterleave2'
import interleave2 from '../../../src/utils/manipulation/interleave2'

describe('deinterleave2', () => {
  it('deinterleaves two components correctly', () => {
    expect(deinterleave2(0b10101010, 0)).toBe(0b0) // Extract bits starting at 0
    expect(deinterleave2(0b10101010, 1)).toBe(0b1111) // Extract bits starting at 1
    expect(deinterleave2(0b01010101, 0)).toBe(0b1111) // Alternating pattern
    expect(deinterleave2(0b01010101, 1)).toBe(0b0) // Complementary bits
  })

  it('handles zeros and edge cases', () => {
    expect(deinterleave2(0, 0)).toBe(0) // All zeros
    expect(deinterleave2(0, 1)).toBe(0) // All zeros
    expect(deinterleave2(1, 0)).toBe(0b1) // Single bit set
    expect(deinterleave2(1, 1)).toBe(0b0) // No bits at position 1
  })

  it('handles larger numbers', () => {
    expect(deinterleave2(0xfefefefe, 0)).toBe(0xeeee) // Extract lower half
    expect(deinterleave2(0xfefefefe, 1)).toBe(0xffff) // Extract upper half
    expect(deinterleave2(0xaaaaaaaa, 0)).toBe(0) // All even bits set
    expect(deinterleave2(0xaaaaaaaa, 1)).toBe(0xffff) // All odd bits set
  })

  it('validates proper reconstruction', () => {
    expect(deinterleave2(0b11001100, 0)).toBe(0b1010) // Extract even-indexed bits
    expect(deinterleave2(0b11001100, 1)).toBe(0b1010) // Extract odd-indexed bits
    expect(deinterleave2(0b11110000, 0)).toBe(0b1100) // Larger bit shifts
    expect(deinterleave2(0b11110000, 1)).toBe(0b1100) // Consistent extraction
  })

  describe('interleave2 and deinterleave2', () => {
    it('interleave2 and deinterleave2 are inverses', () => {
      const x = 0b1010101010101010 // First number
      const y = 0b0101010101010101 // Second number

      // Interleave and then deinterleave
      const interleaved = interleave2(x, y)
      expect(deinterleave2(interleaved, 0)).toBe(x)
      expect(deinterleave2(interleaved, 1)).toBe(y)
    })

    it('handles zero values correctly', () => {
      const x = 0
      const y = 0b1111111111111111

      const interleaved = interleave2(x, y)
      expect(deinterleave2(interleaved, 0)).toBe(x)
      expect(deinterleave2(interleaved, 1)).toBe(y)

      const reversedInterleaved = interleave2(y, x)
      expect(deinterleave2(reversedInterleaved, 0)).toBe(y)
      expect(deinterleave2(reversedInterleaved, 1)).toBe(x)
    })

    it('works with alternating patterns', () => {
      const x = 0b1111000011110000
      const y = 0b0000111100001111

      const interleaved = interleave2(x, y)
      expect(deinterleave2(interleaved, 0)).toBe(x)
      expect(deinterleave2(interleaved, 1)).toBe(y)
    })

    it('handles edge cases with all bits set', () => {
      const x = 0b1111111111111111 // All lower 16 bits set
      const y = 0b0000000000000000 // All bits unset

      const interleaved = interleave2(x, y)
      expect(deinterleave2(interleaved, 0)).toBe(x)
      expect(deinterleave2(interleaved, 1)).toBe(y)

      const reversedInterleaved = interleave2(y, x)
      expect(deinterleave2(reversedInterleaved, 0)).toBe(y)
      expect(deinterleave2(reversedInterleaved, 1)).toBe(x)
    })

    it('reconstructs original numbers after interleaving and deinterleaving', () => {
      const x = 0x1234 // Arbitrary number
      const y = 0xabcd // Another arbitrary number

      const interleaved = interleave2(x, y)
      expect(deinterleave2(interleaved, 0)).toBe(x)
      expect(deinterleave2(interleaved, 1)).toBe(y)
    })

    it('validates proper handling of signed integers', () => {
      const x = -1 & 0xffff // Only use the lower 16 bits
      const y = -1 & 0xffff

      const interleaved = interleave2(x, y)
      expect(deinterleave2(interleaved, 0)).toBe(x)
      expect(deinterleave2(interleaved, 1)).toBe(y)
    })
  })
})
