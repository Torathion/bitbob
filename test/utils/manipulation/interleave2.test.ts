import { describe, expect, it } from 'vitest'
import interleave2 from '../../../src/utils/manipulation/interleave2'

describe('interleave2', () => {
  it('interleaves two 16-bit integers correctly', () => {
    expect(interleave2(3, 5)).toBe(39) // Interleaving bits of 3 and 5
    expect(interleave2(0b1111, 0b0)).toBe(0b1010101) // Interleaving 15 and 0
    expect(interleave2(0xffff, 0xffff)).toBe(0b11111111111111111111111111111111) // Interleaving 65535 and 65535
  })
  it('handles zeros correctly', () => {
    expect(interleave2(0, 0)).toBe(0) // Interleaving 0 and 0
    expect(interleave2(0, 1)).toBe(0b10) // Interleaving 0 and 1
    expect(interleave2(1, 0)).toBe(0b01) // Interleaving 1 and 0
  })

  it('ensures only the lower 16 bits of each number are used', () => {
    expect(interleave2(0xffff0000, 0xffff0000)).toBe(0) // Masking higher bits
    expect(interleave2(0xffff1234, 0xffff5678)).toBe(590098320) // Masking higher bits
  })

  it('handles edge cases', () => {
    expect(interleave2(0b1010101010101010, 0b0101010101010101)).toBe(0b1100110011001100110011001100110) // Interleaving alternating patterns
    expect(interleave2(0xffff, 0)).toBe(0b01010101010101010101010101010101) // One full, one empty
  })
})
