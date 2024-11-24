import { describe, expect, it } from 'vitest'
import sign from '../../../src/utils/math/sign'

describe('sign', () => {
  it('returns 1 for positive numbers', () => {
    expect(sign(5)).toBe(1)
    expect(sign(100)).toBe(1)
    expect(sign(0.1)).toBe(1)
  })

  it('returns -1 for negative numbers', () => {
    expect(sign(-3)).toBe(-1)
    expect(sign(-100)).toBe(-1)
    expect(sign(-0.1)).toBe(-1)
  })

  it('returns 0 for zero', () => {
    expect(sign(0)).toBe(0)
    expect(sign(-0)).toBe(0) // Edge case: signed zero
  })

  it('handles edge cases for large numbers', () => {
    expect(sign(Number.MAX_SAFE_INTEGER)).toBe(1)
    expect(sign(-Number.MAX_SAFE_INTEGER)).toBe(-1)
    expect(sign(Number.MIN_VALUE)).toBe(1)
  })
})
