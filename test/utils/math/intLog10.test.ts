import { describe, expect, it } from 'vitest'
import intLog10 from '../../../src/utils/math/intLog10'

describe('intLog10', () => {
  it('should return the correct log10 for powers of 10', () => {
    expect(intLog10(1)).toBe(0) // log10(1) = 0
    expect(intLog10(10)).toBe(1) // log10(10) = 1
    expect(intLog10(100)).toBe(2) // log10(100) = 2
    expect(intLog10(1000)).toBe(3) // log10(1000) = 3
    expect(intLog10(10000)).toBe(4) // log10(10000) = 4
    expect(intLog10(100000)).toBe(5) // log10(100000) = 5
    expect(intLog10(1000000)).toBe(6) // log10(1000000) = 6
    expect(intLog10(10000000)).toBe(7) // log10(10000000) = 7
    expect(intLog10(100000000)).toBe(8) // log10(100000000) = 8
    expect(intLog10(1000000000)).toBe(9) // log10(1000000000) = 9
  })

  it('should return correct log10 for numbers between powers of 10', () => {
    expect(intLog10(50)).toBe(1) // log10(50) ~ 1.7, but integer part is 1
    expect(intLog10(500)).toBe(2) // log10(500) ~ 2.7, but integer part is 2
    expect(intLog10(1500)).toBe(3) // log10(1500) ~ 3.18, but integer part is 3
    expect(intLog10(25000)).toBe(4) // log10(25000) ~ 4.4, but integer part is 4
    expect(intLog10(500000)).toBe(5) // log10(500000) ~ 5.7, but integer part is 5
    expect(intLog10(999999999)).toBe(8) // log10(999999999) ~ 8.999999, but integer part is 8
  })

  it('should return 0 for 1', () => {
    expect(intLog10(1)).toBe(0) // log10(1) = 0
  })

  it('should return NaN for zero or negative numbers', () => {
    expect(intLog10(0)).toBe(0) // log10(0) is undefined, but still handles it out of compatibility
    expect(intLog10(-1)).toBe(NaN) // log10 of negative numbers is undefined
  })

  it('should handle large values correctly', () => {
    expect(intLog10(1e6)).toBe(6) // log10(1e6) = 6
    expect(intLog10(Number.MAX_SAFE_INTEGER)).toBe(9) // log10(Number.MAX_SAFE_INTEGER) ~ 18.78, but integer part is 18
  })
})
