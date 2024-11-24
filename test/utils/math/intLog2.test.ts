import { describe, expect, it } from 'vitest'
import intLog2 from '../../../src/utils/math/intLog2'

describe('intLog2', () => {
  it('should return the correct log2 for powers of 2', () => {
    expect(intLog2(1)).toBe(0) // log2(1) = 0
    expect(intLog2(2)).toBe(1) // log2(2) = 1
    expect(intLog2(4)).toBe(2) // log2(4) = 2
    expect(intLog2(8)).toBe(3) // log2(8) = 3
    expect(intLog2(16)).toBe(4) // log2(16) = 4
    expect(intLog2(32)).toBe(5) // log2(32) = 5
    expect(intLog2(64)).toBe(6) // log2(64) = 6
    expect(intLog2(1024)).toBe(10) // log2(1024) = 10
  })

  it('should return the correct log2 for non-powers of 2', () => {
    expect(intLog2(3)).toBe(1) // log2(3) ~ 1.58, but integer part is 1
    expect(intLog2(5)).toBe(2) // log2(5) ~ 2.32, but integer part is 2
    expect(intLog2(7)).toBe(2) // log2(7) ~ 2.81, but integer part is 2
    expect(intLog2(15)).toBe(3) // log2(15) ~ 3.91, but integer part is 3
    expect(intLog2(255)).toBe(7) // log2(255) ~ 7.98, but integer part is 7
  })

  it('should handle edge cases correctly', () => {
    expect(intLog2(0)).toBe(0) // log2(0) is undefined, but it still handles it due to compatibility issues.
    expect(intLog2(-1)).toBe(NaN) // it blocks negative numbers
  })

  it('should handle large values correctly', () => {
    expect(intLog2(1e6)).toBe(19) // log2(1e6) ~ 19.93, but integer part is 19
    expect(intLog2(Number.MAX_SAFE_INTEGER)).toBe(31) // log2(Number.MAX_SAFE_INTEGER) ~ 53.33, because of 64 bit numbers, but it only handles 32 bit numbers.
  })

  it('should handle small values correctly', () => {
    expect(intLog2(1)).toBe(0) // log2(1) = 0
    expect(intLog2(2)).toBe(1) // log2(2) = 1
  })
})
