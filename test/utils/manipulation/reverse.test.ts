import { describe, expect, it } from 'vitest'
import reverse from '../../../src/utils/manipulation/reverse'

describe('reverse', () => {
  it('should reverse the bits of a 32-bit number', () => {
    expect(reverse(0b00000000000000000000000000001010)).toBe(0b01010000000000000000000000000000)
    expect(reverse(0b00000000000000000000000010000000)).toBe(0b00000001000000000000000000000000)
    expect(reverse(0b00000000000000000000000000000001)).toBe(0b10000000000000000000000000000000)
    expect(reverse(0b11111111111111111111111111111111)).toBe(0b11111111111111111111111111111111) // All bits set -> Same value
  })

  it('should handle 0 correctly', () => {
    expect(reverse(0)).toBe(0) // 0 has no set bits, so the reverse is also 0
  })

  it('should reverse the bits of other numbers', () => {
    expect(reverse(0b00000000000000000000000000001111)).toBe(0b11110000000000000000000000000000) // Example: 15 -> 0xf0000000
    expect(reverse(0b00000000000000000000000010101010)).toBe(0b01010101000000000000000000000000) // Example: 0xAA -> 0x55555500
  })
})
