import { describe, expect, it } from 'vitest'
import parity from '../../../src/utils/manipulation/parity'

describe('parity', () => {
  it('should return 0 for numbers with even parity', () => {
    expect(parity(0)).toBe(0) // Binary: 0 -> Even (0 ones)
    expect(parity(3)).toBe(0) // Binary: 11 -> Even (2 ones)
    expect(parity(5)).toBe(0) // Binary: 101 -> Even (2 ones)
    expect(parity(9)).toBe(0) // Binary: 1001 -> Even (2 ones)
    expect(parity(15)).toBe(0) // Binary: 1111 -> Even (4 ones)
  })

  it('should return 1 for numbers with odd parity', () => {
    expect(parity(1)).toBe(1) // Binary: 1 -> Odd (1 one)
    expect(parity(7)).toBe(1) // Binary: 111 -> Odd (3 ones)
    expect(parity(11)).toBe(1) // Binary: 1011 -> Odd (3 ones)
    expect(parity(31)).toBe(1) // Binary: 11111 -> Odd (5 ones)
  })

  it('should handle large numbers correctly', () => {
    expect(parity(0xffffffff)).toBe(0) // All 32 bits set -> Even (32 ones)
    expect(parity(0x80000001)).toBe(0) // Binary: 1000...0001 -> Even (2 ones)
  })

  it('should handle edge cases like 0', () => {
    expect(parity(0)).toBe(0) // Binary: 0 -> Even (0 ones)
  })
})
