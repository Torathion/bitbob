import { describe, expect, it, test } from 'vitest'
import countTrailingZeros from '../../../src/utils/measurement/countTrailingZeros'

describe('countTrailingZeros', () => {
  it('works', () => {
    expect(countTrailingZeros(0)).toBe(32) // Because of the 32bit representation
    expect(countTrailingZeros(1)).toBe(0)
    expect(countTrailingZeros(2)).toBe(1)
    expect(countTrailingZeros(16)).toBe(4)
  })

  test('powers of 2', () => {
    expect(countTrailingZeros(1)).toBe(0) // 1 (2^0) has 0 trailing zeros
    expect(countTrailingZeros(2)).toBe(1) // 2 (2^1) has 1 trailing zero
    expect(countTrailingZeros(4)).toBe(2) // 4 (2^2) has 2 trailing zeros
    expect(countTrailingZeros(8)).toBe(3) // 8 (2^3) has 3 trailing zeros
    expect(countTrailingZeros(16)).toBe(4) // 16 (2^4) has 4 trailing zeros
    expect(countTrailingZeros(1024)).toBe(10) // 1024 (2^10) has 10 trailing zeros
  })

  test('edge cases', () => {
    expect(countTrailingZeros(0)).toBe(32) // 0 has 32 trailing zeros (all bits are 0)
    expect(countTrailingZeros(-1)).toBe(0) // -1 (all bits set) has 0 trailing zeros
    expect(countTrailingZeros(-8)).toBe(3) // -8 (11111111111111111111111111111000 in binary) has 3 trailing zeros
  })
})
