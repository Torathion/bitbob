import { describe, expect, it } from 'vitest'
import min from '../../../src/utils/math/min'

describe('min', () => {
  it('returns the smaller of two positive numbers', () => {
    expect(min(5, 10)).toBe(5)
  })

  it('returns the smaller of two negative numbers', () => {
    expect(min(-3, -7)).toBe(-7)
  })

  it('returns the correct value when one number is zero', () => {
    expect(min(0, 7)).toBe(0)
    expect(min(-5, 0)).toBe(-5)
  })

  it('returns the same number when both numbers are equal', () => {
    expect(min(4, 4)).toBe(4)
  })

  it('handles mixed positive and negative numbers', () => {
    expect(min(-10, 10)).toBe(-10)
  })
})
