import { describe, expect, it } from 'vitest'
import diff from '../../../src/utils/measurement/diff'
import { I32_MAX } from '../../../src/constants'

describe('diff', () => {
  it('counts the number of different bits correctly for small numbers', () => {
    expect(diff(5, 3)).toBe(2) // 5 (101) and 3 (011)
    expect(diff(10, 7)).toBe(3) // 10 (1010) and 7 (0111)
    expect(diff(15, 0)).toBe(4) // 15 (1111) and 0 (0000) differ in four bits
  })

  it('returns 0 when both numbers are identical', () => {
    expect(diff(5, 5)).toBe(0) // 5 (101) and 5 (101) are identical, so 0 bits differ
    expect(diff(100, 100)).toBe(0) // 100 (1100100) and 100 (1100100) are identical
  })

  it('counts differing bits for negative numbers', () => {
    expect(diff(-1, 1)).toBe(31)
    expect(diff(-5, 3)).toBe(29)
  })

  it('works with edge case numbers like 0 and the maximum integer', () => {
    expect(diff(0, I32_MAX)).toBe(31) // The number of bits that differ between 0 and the largest safe integer
    expect(diff(I32_MAX, 0)).toBe(31) // The same check, order reversed
  })

  it('handles large numbers correctly', () => {
    expect(diff(1000000000, 1000000001)).toBe(1)
    expect(diff(123456789, 987654321)).toBe(15)
  })

  it('handles edge case with zero correctly', () => {
    expect(diff(0, 0)).toBe(0) // Both numbers are identical (both are 0)
    expect(diff(0, 1)).toBe(1) // 0 (0000) and 1 (0001) differ in one bit (least significant bit)
  })

  it('counts bits correctly for single bit numbers', () => {
    expect(diff(1, 2)).toBe(2) // 1 (0001) and 2 (0010) differ in two bits (in different positions)
    expect(diff(1, 4)).toBe(2) // 1 (0001) and 4 (0100) differ in two bits (in different positions)
  })
})
