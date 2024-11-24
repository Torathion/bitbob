import { describe, expect, it } from 'vitest'
import abs from '../../../src/utils/math/abs'

describe('abs', () => {
  it('should return the absolute value of a positive number', () => {
    expect(abs(5)).toBe(5)
  })

  it('should return the absolute value of a negative number', () => {
    expect(abs(-5)).toBe(5)
  })

  it('should return 0 when the input is 0', () => {
    expect(abs(0)).toBe(0)
  })

  it('should handle large positive numbers', () => {
    expect(abs(1000000)).toBe(1000000)
  })

  it('should handle large negative numbers', () => {
    expect(abs(-1000000)).toBe(1000000)
  })

  it('should handle edge case for the smallest possible integer (-2147483648)', () => {
    expect(abs(-2147483648)).toBe(2147483648)
  })

  it('should handle edge case for the largest possible integer (2147483647)', () => {
    expect(abs(2147483647)).toBe(2147483647)
  })
})
