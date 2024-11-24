import { describe, expect, test } from 'vitest'
import setField from '../../../src/utils/manipulation/setField'

describe('setField function', () => {
  test('sets a field correctly in a given number', () => {
    expect(setField(48493, 3, 4, 7)).toBe(47597) // Example from the description
    expect(setField(0b1011101011110101, 0b0011, 4, 7)).toBe(0b1011100111110101)
    expect(setField(0b11111111, 0b00, 2, 6)).toBe(0b00111111) // Clears bits 6-7 and sets them to 00
  })

  test('handles default shift values (shift = 0)', () => {
    expect(setField(0b1111, 0b10, 2)).toBe(0b1110) // Modifies the first 2 bits
  })

  test('handles precomputed masks', () => {
    const mask = 0b1111 << 4 // Precomputed mask for 4 bits starting at bit 4
    expect(setField(0b11111111, 0b0000, 4, 4, mask)).toBe(0b00001111)
  })

  test('does not modify bits outside the field', () => {
    expect(setField(0b10101010, 0b11, 2, 4)).toBe(0b10111010) // Bits outside field remain the same
  })
})
