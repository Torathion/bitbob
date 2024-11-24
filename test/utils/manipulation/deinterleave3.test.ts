import { describe, expect, it } from 'vitest'
import deinterleave3 from '../../../src/utils/manipulation/deinterleave3'
import interleave3 from '../../../src/utils/manipulation/interleave3'
import unsignedWrap from '../../../src/utils/manipulation/unsignedWrap'

describe('deinterleave3', () => {
  it('extracts components from interleaved numbers', () => {
    expect(deinterleave3(0b001, 0)).toBe(0b1) // Extract x (0th bit group)
    expect(deinterleave3(0b001, 1)).toBe(0b0) // Extract y (1st bit group)
    expect(deinterleave3(0b001, 2)).toBe(0b0) // Extract z (2nd bit group)

    expect(deinterleave3(0b010, 0)).toBe(0b0) // Extract x (0th bit group)
    expect(deinterleave3(0b010, 1)).toBe(0b1) // Extract y (1st bit group)
    expect(deinterleave3(0b010, 2)).toBe(0b0) // Extract z (2nd bit group)

    expect(deinterleave3(0b100, 0)).toBe(0b0) // Extract x (0th bit group)
    expect(deinterleave3(0b100, 1)).toBe(0b0) // Extract y (1st bit group)
    expect(deinterleave3(0b100, 2)).toBe(0b1) // Extract z (2nd bit group)
  })

  it('handles mixed components correctly', () => {
    const interleaved = 0b100010011 // Interleaving 1, 2, and 3
    expect(deinterleave3(interleaved, 0)).toBe(0b1) // Extract x (0th component)
    expect(deinterleave3(interleaved, 1)).toBe(0b11) // Extract y (1st component)
    expect(deinterleave3(interleaved, 2)).toBe(0b100) // Extract z (2nd component)
  })

  it('handles alternating bits in all components', () => {
    // Interleaving 0b101, 0b010, 0b111 gives 0b111010101
    const interleaved = 0b111010101
    expect(deinterleave3(interleaved, 0)).toBe(0b101) // Extract x
    expect(deinterleave3(interleaved, 1)).toBe(0b110) // Extract y
    expect(deinterleave3(interleaved, 2)).toBe(0b101) // Extract z
  })

  it('handles single-bit interleaved values', () => {
    expect(deinterleave3(0b1, 0)).toBe(0b1) // Extract x
    expect(deinterleave3(0b10, 1)).toBe(0b1) // Extract y
    expect(deinterleave3(0b100, 2)).toBe(0b1) // Extract z
  })

  it('handles all-zero components correctly', () => {
    // Interleaving 0b0, 0b0, 0b0 gives 0b0
    const interleaved = 0b0
    expect(deinterleave3(interleaved, 0)).toBe(0b0) // Extract x
    expect(deinterleave3(interleaved, 1)).toBe(0b0) // Extract y
    expect(deinterleave3(interleaved, 2)).toBe(0b0) // Extract z
  })

  it('handles maximum interleaving of 10-bit components', () => {
    const interleaved = 0b111111111111111111111111111 // Interleaving max 10 bits for x, y, z
    expect(deinterleave3(interleaved, 0)).toBe(0b111111111) // Extract x
    expect(deinterleave3(interleaved, 1)).toBe(0b111111111) // Extract y
    expect(deinterleave3(interleaved, 2)).toBe(0b111111111) // Extract z
  })

  describe('interleave3 and deinterleave3', () => {
    it('should interleave and then deinterleave correctly for 3 components', () => {
      const x = 0b101 // 5 in binary
      const y = 0b010 // 2 in binary
      const z = 0b001 // 1 in binary

      // Interleave the components
      const interleaved = interleave3(x, y, z)

      // Deinterleave and check each component
      expect(deinterleave3(interleaved, 0)).toBe(x) // Extract x
      expect(deinterleave3(interleaved, 1)).toBe(y) // Extract y
      expect(deinterleave3(interleaved, 2)).toBe(z) // Extract z
    })

    it('should handle alternating bits for all components', () => {
      const x = 0b101010 // 42 in binary
      const y = 0b010101 // 21 in binary
      const z = 0b111000 // 56 in binary

      // Interleave the components
      const interleaved = interleave3(x, y, z)

      // Deinterleave and check each component
      expect(deinterleave3(interleaved, 0)).toBe(x) // Extract x
      expect(deinterleave3(interleaved, 1)).toBe(y) // Extract y
      expect(deinterleave3(interleaved, 2)).toBe(z) // Extract z
    })

    it('should handle edge case of all-zero components', () => {
      const x = 0b0 // 0
      const y = 0b0 // 0
      const z = 0b0 // 0

      // Interleave the components
      const interleaved = interleave3(x, y, z)

      // Deinterleave and check each component
      expect(deinterleave3(interleaved, 0)).toBe(x) // Extract x
      expect(deinterleave3(interleaved, 1)).toBe(y) // Extract y
      expect(deinterleave3(interleaved, 2)).toBe(z) // Extract z
    })

    it('should handle maximum values for 3 components (with 10 bits each)', () => {
      const x = 0b1111111111 // 1023 in binary
      const y = 0b1111111111 // 1023 in binary
      const z = 0b1111111111 // 1023 in binary

      // Interleave the components
      const interleaved = interleave3(x, y, z)

      // Deinterleave and check each component
      expect(deinterleave3(interleaved, 0)).toBe(x) // Extract x
      expect(deinterleave3(interleaved, 1)).toBe(y) // Extract y
      expect(deinterleave3(interleaved, 2)).toBe(z) // Extract z
    })

    it('should work with the smallest non-zero values', () => {
      const x = 0b1 // 1 in binary
      const y = 0b10 // 2 in binary
      const z = 0b100 // 4 in binary

      // Interleave the components
      const interleaved = interleave3(x, y, z)

      // Deinterleave and check each component
      expect(deinterleave3(interleaved, 0)).toBe(x) // Extract x
      expect(deinterleave3(interleaved, 1)).toBe(y) // Extract y
      expect(deinterleave3(interleaved, 2)).toBe(z) // Extract z
    })

    it('should handle large values for 3 components', () => {
      const x = 0b1111111111111111 // 65535 in binary
      const y = 0b1010101010101010 // 43690 in binary
      const z = 0b1100110011001100 // 52428 in binary

      // Interleave the components
      const interleaved = interleave3(x, y, z)

      // Deinterleave and check each component
      expect(deinterleave3(interleaved, 0)).toBe(unsignedWrap(x, 10)) // Extract x
      expect(deinterleave3(interleaved, 1)).toBe(unsignedWrap(y, 10)) // Extract y
      expect(deinterleave3(interleaved, 2)).toBe(unsignedWrap(z, 10)) // Extract z
    })
  })
})
