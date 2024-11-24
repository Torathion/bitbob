import { describe, expect, test } from 'vitest'
import max from '../../../src/utils/math/max'

describe('max', () => {
  test('returns the larger of two positive integers', () => {
    expect(max(5, 10)).toBe(10)
  })

  test('returns the larger of two negative integers', () => {
    expect(max(-3, -7)).toBe(-3)
  })

  test('returns the correct value when one number is zero', () => {
    expect(max(0, 7)).toBe(7)
    expect(max(-5, 0)).toBe(0)
  })

  test('returns the same number when both numbers are equal', () => {
    expect(max(4, 4)).toBe(4)
  })

  test('handles mixed positive and negative numbers', () => {
    expect(max(-10, 10)).toBe(10)
  })
})
