import { describe, expect, it } from 'vitest'
import floor from '../../../src/utils/math/floor'

describe('floor', () => {
  it('should return the number itself for integers', () => {
    expect(floor(5)).toBe(5)
    expect(floor(-5)).toBe(-5)
    expect(floor(100)).toBe(100)
    expect(floor(-100)).toBe(-100)
  })

  it('should round down positive floating point numbers (towards zero)', () => {
    expect(floor(5.8)).toBe(5)
    expect(floor(3.14)).toBe(3)
    expect(floor(0.99)).toBe(0)
  })

  it('should round towards zero for negative floating point numbers', () => {
    expect(floor(-5.8)).toBe(-5) // Rounds to the nearest lower integer (i.e., -5)
    expect(floor(-3.14)).toBe(-3)
    expect(floor(-0.99)).toBe(0)
  })

  it('should return 0 for zero', () => {
    expect(floor(0)).toBe(0)
    expect(floor(-0)).toBe(0)
  })

  it('should handle large numbers', () => {
    expect(floor(1e8)).toBe(1e8)
    expect(floor(-1e8)).toBe(-1e8)
  })

  it('should handle edge cases with very small fractions', () => {
    expect(floor(0.0001)).toBe(0)
    expect(floor(-0.0001)).toBe(0)
  })
})
