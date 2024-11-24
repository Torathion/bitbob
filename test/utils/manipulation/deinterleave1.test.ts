import { describe, expect, it } from 'vitest'
import deinterleave1 from '../../../src/utils/manipulation/deinterleave1'
import interleave1 from '../../../src/utils/manipulation/interleave1'

describe('deinterleave1', () => {
  it('deinterleaves a number interleaved with zeros correctly', () => {
    expect(deinterleave1(0b01010101)).toBe(0b1111) // Deinterleave 85 (binary 01010101) => 15 (binary 1111)
    expect(deinterleave1(0b10101010101010101)).toBe(0b111111111) // Deinterleave alternating 16-bit pattern
    expect(deinterleave1(0b00000000)).toBe(0b0) // Deinterleave 0
  })

  it('deinterleaves numbers with specific patterns', () => {
    expect(deinterleave1(0b0101010101010101)).toBe(0b11111111) // Alternating bits
    expect(deinterleave1(0b0001000100010001)).toBe(0b1010101) // Sparse bits
    expect(deinterleave1(0b1000000010000001)).toBe(0b1) // Deinterleave with leading zeroes
  })

  it('handles edge cases', () => {
    expect(deinterleave1(0b1)).toBe(0b1) // Single bit
    expect(deinterleave1(0b10)).toBe(0b0) // Second bit set
    expect(deinterleave1(0b0)).toBe(0b0) // No bits set
  })

  it('ensures correctness for 32-bit numbers', () => {
    expect(deinterleave1(0xffffffff)).toBe(0b1111111111111111) // Maximum interleaved pattern for 16-bit
  })

  it('returns the same number from after interleaving it', () => {
    expect(deinterleave1(interleave1(0))).toBe(0)
    expect(deinterleave1(interleave1(5))).toBe(5)
    // Fails because it's bigger than 16 bit
    expect(deinterleave1(interleave1(0xffff1234))).not.toBe(0xffff1234)
  })
})
