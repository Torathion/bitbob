import { describe, expect, it } from 'vitest'
import aSign from '../../../src/utils/math/aSign'

describe('aSign', () => {
  it('should return 1 for negative numbers (inverse sign)', () => {
    expect(aSign(-5)).toBe(1)
    expect(aSign(-123)).toBe(1)
  })

  it('should return -1 for positive numbers (inverse sign)', () => {
    expect(aSign(5)).toBe(-1)
    expect(aSign(123)).toBe(-1)
  })

  it('should return 0 for zero (inverse sign)', () => {
    expect(aSign(0)).toBe(0)
  })

  it('should handle large negative numbers (inverse sign)', () => {
    expect(aSign(-1000000)).toBe(1)
  })

  it('should handle large positive numbers (inverse sign)', () => {
    expect(aSign(1000000)).toBe(-1)
  })
})
