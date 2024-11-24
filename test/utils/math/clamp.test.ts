import { describe, expect, it } from 'vitest'
import clamp from '../../../src/utils/math/clamp'
import { INT32_MAX, INT32_MIN } from '../../../src/constants'

describe('clamp', () => {
  it('clamps a number to the given min and max values', () => {
    expect(clamp(5, 0, 10)).toBe(5) // 5 is within the range [0, 10]
    expect(clamp(15, 0, 10)).toBe(10) // 15 is above the max, clamped to 10
    expect(clamp(-5, 0, 10)).toBe(0) // -5 is below the min, clamped to 0
  })

  it('clamps the number correctly when the value is equal to the min or max', () => {
    expect(clamp(0, 0, 10)).toBe(0) // 0 is equal to the min, should return 0
    expect(clamp(10, 0, 10)).toBe(10) // 10 is equal to the max, should return 10
  })

  it('clamps negative values correctly', () => {
    expect(clamp(-10, -5, 5)).toBe(-5) // -10 is below the min, clamped to -5
    expect(clamp(-3, -5, 5)).toBe(-3) // -3 is within the range [-5, 5]
  })

  it('handles large numbers correctly', () => {
    expect(clamp(1000000, 0, 500000)).toBe(500000) // 1000000 is above max, clamped to 500000
    expect(clamp(-1000000, -500000, 500000)).toBe(-500000) // -1000000 is below min, clamped to -500000
  })

  it('returns the number if it is within the specified range', () => {
    expect(clamp(8, 5, 10)).toBe(8) // 8 is within the range [5, 10]
    expect(clamp(-2, -10, 0)).toBe(-2) // -2 is within the range [-10, 0]
  })

  it('handles edge cases with boundary values', () => {
    expect(clamp(INT32_MAX, 0, INT32_MAX)).toBe(INT32_MAX) // Edge case with max value
    expect(clamp(INT32_MIN, INT32_MIN, 0)).toBe(INT32_MIN) // Edge case with min value
  })
})
