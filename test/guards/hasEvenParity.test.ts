import { describe, expect, it } from 'vitest'
import hasEvenParity from '../../src/guards/hasEvenParity'
import { INT32_MAX, INT32_MIN } from '../../src/constants'

describe('hasEvenParity', () => {
  it('returns true for numbers with an even number of 1s in their binary representation', () => {
    expect(hasEvenParity(0)).toBe(true) // 0 (binary: 0) has 0 ones (even)
    expect(hasEvenParity(3)).toBe(true) // 3 (binary: 11) has 2 ones (even)
    expect(hasEvenParity(5)).toBe(true) // 5 (binary: 101) has 2 ones (even)
    expect(hasEvenParity(10)).toBe(true) // 10 (binary: 1010) has 2 ones (even)
    expect(hasEvenParity(15)).toBe(true) // 15 (binary: 1111) has 4 ones (even)
  })

  it('returns false for numbers with an odd number of 1s in their binary representation', () => {
    expect(hasEvenParity(1)).toBe(false) // 1 (binary: 1) has 1 one (odd)
    expect(hasEvenParity(2)).toBe(false) // 2 (binary: 10) has 1 one (odd)
    expect(hasEvenParity(7)).toBe(false) // 7 (binary: 111) has 3 ones (odd)
  })

  it('handles negative numbers correctly', () => {
    expect(hasEvenParity(-1)).toBe(true) // -1 in 32-bit binary has all 1s (32 ones, odd after sign correction)
    expect(hasEvenParity(-5)).toBe(false) // -5 has an even number of 1s in two's complement representation
  })

  it('handles edge cases with large numbers', () => {
    expect(hasEvenParity(INT32_MAX)).toBe(false)
    expect(hasEvenParity(INT32_MIN)).toBe(false)
  })

  it('handles numbers with all bits set', () => {
    expect(hasEvenParity(0xffffffff)).toBe(true) // 32-bit all ones (binary: 111...111, even)
  })
})
