import { describe, expect, it } from 'vitest'
import isFieldSet from '../../src/guards/isFieldSet'

describe('isFieldSet', () => {
  it('returns true if the specified field is fully set', () => {
    expect(isFieldSet(0b1111, 4, 0)).toBe(true) // 4 bits fully set (1111)
    expect(isFieldSet(0b1000111, 3, 0)).toBe(true) // Last 3 bits set (111)
  })

  it('returns false if the specified field is not fully set', () => {
    expect(isFieldSet(0b1011, 4, 0)).toBe(false) // Not all 4 bits set (1011)
    expect(isFieldSet(0b10111010, 3, 0)).toBe(false) // Not all 3 bits set (110)
  })

  it('works with shifted fields', () => {
    expect(isFieldSet(0b11110000, 4, 4)).toBe(true) // Bits 4 to 7 set (1111)
    expect(isFieldSet(0b10110000, 4, 4)).toBe(false) // Not all bits 4 to 7 set (1011)
  })

  it('returns false for an empty field (size 0)', () => {
    expect(isFieldSet(0b1111, 0)).toBe(false) // No bits to check, should return false
  })

  it('returns false when the field is out of bounds', () => {
    expect(isFieldSet(0b1111, 5, 0)).toBe(false) // Field size 5 larger than 4-bit number
  })
})
