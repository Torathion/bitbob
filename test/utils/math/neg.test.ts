import { describe, expect, it } from 'vitest'
import neg from '../../../src/utils/math/neg'
import { INT32_MAX } from '../../../src/constants'

describe('neg', () => {
  it('returns the negation of positive numbers', () => {
    expect(neg(5)).toBe(-5)
    expect(neg(42)).toBe(-42)
  })

  it('returns the negation of negative numbers', () => {
    expect(neg(-3)).toBe(3)
    expect(neg(-100)).toBe(100)
  })

  it('returns 0 when the input is 0', () => {
    expect(neg(0)).toBe(0)
  })

  it('handles edge cases for large numbers', () => {
    expect(neg(INT32_MAX)).toBe(-INT32_MAX)
  })
})
