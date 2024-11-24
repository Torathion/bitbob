import { describe, expect, it } from 'vitest'
import interleave1 from '../../../src/utils/manipulation/interleave1'
import deinterleave1 from '../../../src/utils/manipulation/deinterleave1'

describe('interleave1', () => {
  it('interleaves bits of x with zeros', () => {
    expect(interleave1(0b1)).toBe(0b1) // Single bit interleaving with zero
    expect(interleave1(0b11)).toBe(0b101) // Interleave 1 and 1
    expect(interleave1(0b101)).toBe(0b10001) // Interleave 1, 0, and 1
    expect(interleave1(0b111)).toBe(0b10101) // Interleave 1, 1, and 1
    expect(interleave1(0b100101)).toBe(0b10000010001) // Interleave bits of 100101 with zeros
  })

  it('handles edge cases', () => {
    expect(interleave1(0)).toBe(0) // Interleave 0 with zeros (should return 0)
    expect(interleave1(0b1010101010101010)).toBe(0b1000100010001000100010001000100) // Interleave a 16-bit number
    expect(interleave1(0b11111111111111111111111111111111)).toBe(0b1010101010101010101010101010101) // Interleave a 32-bit number
  })

  it('returns the same number from after deinterleaving it', () => {
    expect(interleave1(deinterleave1(0))).toBe(0)
    expect(interleave1(deinterleave1(5))).toBe(5)
    // Fails because it's bigger than 16 bit
    expect(interleave1(deinterleave1(0xffff1234))).not.toBe(0xffff1234)
  })
})
