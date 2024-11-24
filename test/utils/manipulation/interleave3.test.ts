import { describe, expect, it } from 'vitest'
import interleave3 from '../../../src/utils/manipulation/interleave3'

describe('interleave3', () => {
  it('interleaves three 10-bit integers correctly', () => {
    expect(interleave3(0b0000000000000011, 0b0000000000000101, 0b0000000000000111)).toBe(431) // Interleaving 3, 5, and 7
    expect(interleave3(0b0000000000001111, 0b0000000000000000, 0b0000000000001111)).toBe(2925) // Interleaving 15, 0, and 15
    expect(interleave3(0x3ff, 0x2a, 0x1f)).toBe(153476989) // Interleaving 0x3ff, 0x2a, and 0x1f
    expect(interleave3(0x3ff, 0x3ff, 0x3ff)).toBe(1073741823) // Interleaving 0x3ff, 0x3ff, and 0x3ff
  })

  it('handles zeros correctly', () => {
    expect(interleave3(0, 0, 0)).toBe(0) // Interleaving 0, 0, and 0
    expect(interleave3(0, 1, 0)).toBe(0b010) // Interleaving 0, 1, and 0
    expect(interleave3(1, 0, 0)).toBe(0b1) // Interleaving 1, 0, and 0
  })

  it('ensures only the lower 10 bits of each number are used', () => {
    expect(interleave3(0xffff0000, 0xffff0000, 0xffff0000)).toBe(0) // Masking higher bits, result should be 0
    expect(interleave3(0xffff1234, 0xffff5678, 0xffff9abc)).toBe(948698432) // Masking higher bits
  })

  it('handles edge cases', () => {
    expect(interleave3(0b1010101010, 0b0101010101, 0b1100110011)).toBe(0b101110001010101110001010101110) // Interleaving alternating bits
    expect(interleave3(0b1111111111, 0b0000000000, 0b1010101010)).toBe(0b101001101001101001101001101001) // Various patterns
  })
})
