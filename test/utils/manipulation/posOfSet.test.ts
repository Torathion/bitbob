import { describe, expect, it } from 'vitest'
import posOfSet from '../../../src/utils/manipulation/posOfSet'

describe('posOfSet', () => {
  it('should return the correct position for numbers with a single set bit', () => {
    expect(posOfSet(1)).toBe(1) // Binary: 0001 -> Position 1
    expect(posOfSet(2)).toBe(2) // Binary: 0010 -> Position 2
    expect(posOfSet(4)).toBe(3) // Binary: 0100 -> Position 3
    expect(posOfSet(8)).toBe(4) // Binary: 1000 -> Position 4
  })

  it('should return 1 for numbers with multiple set bits', () => {
    expect(posOfSet(3)).toBe(1) // Binary: 0011 -> Multiple bits set
    expect(posOfSet(6)).toBe(1) // Binary: 0110 -> Multiple bits set
    expect(posOfSet(7)).toBe(1) // Binary: 0111 -> Multiple bits set
    expect(posOfSet(15)).toBe(1) // Binary: 1111 -> Multiple bits set
  })

  it('should return 0 for input 0', () => {
    expect(posOfSet(0)).toBe(0) // Binary: 0 -> No set bits
  })

  it('should handle large numbers correctly', () => {
    expect(posOfSet(1 << 30)).toBe(31) // Binary: 1 followed by 30 zeros -> Position 31
    expect(posOfSet((1 << 30) + 1)).toBe(1) // Binary: 1...01 -> Multiple bits set
  })
})
