import { describe, expect, it } from 'vitest'
import isSparse from '../../src/guards/isSparse'
import { INT32_MAX, INT32_MIN } from '../../src/constants'

describe('isSparse', () => {
  it('returns true for sparse numbers', () => {
    expect(isSparse(0)).toBe(true) // 0 (binary: 0) has no adjacent 1s
    expect(isSparse(1)).toBe(true) // 1 (binary: 1) has no adjacent 1s
    expect(isSparse(2)).toBe(true) // 2 (binary: 10) has no adjacent 1s
    expect(isSparse(5)).toBe(true) // 5 (binary: 101) has no adjacent 1s
    expect(isSparse(8)).toBe(true) // 8 (binary: 1000) has no adjacent 1s
    expect(isSparse(10)).toBe(true) // 10 (binary: 1010) has no adjacent 1s
  })

  it('returns false for non-sparse numbers', () => {
    expect(isSparse(3)).toBe(false) // 3 (binary: 11) has adjacent 1s
    expect(isSparse(6)).toBe(false) // 6 (binary: 110) has adjacent 1s
    expect(isSparse(7)).toBe(false) // 7 (binary: 111) has adjacent 1s
    expect(isSparse(12)).toBe(false) // 12 (binary: 1100) has adjacent 1s
  })

  it('handles negative numbers correctly', () => {
    expect(isSparse(-1)).toBe(false) // -1 in binary has all bits set, so it is not sparse
    expect(isSparse(-5)).toBe(false) // -5 (two's complement) has adjacent 1s
  })

  it('handles edge cases', () => {
    expect(isSparse(INT32_MAX)).toBe(false) // Largest safe integer is not sparse
    expect(isSparse(INT32_MIN)).toBe(false) // Smallest safe integer is not sparse
  })
})
