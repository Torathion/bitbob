import { describe, expect, it } from 'vitest'
import frac from '../../../src/utils/math/frac'

describe('frac', () => {
  it('should return 0 for integer values', () => {
    expect(frac(5)).toBe(0)
    expect(frac(-5)).toBe(0)
    expect(frac(100)).toBe(0)
    expect(frac(-100)).toBe(0)
  })

  it('should return the correct fractional part for positive floating point numbers', () => {
    expect(frac(5.75)).toBe(0.75) // Fraction part of 5.75 is 0.75
    expect(frac(3.14)).toBe(0.14000000000000012) // Fraction part of 3.14 is 0.14, but due to rounding issues, it's slightly off
    expect(frac(0.99)).toBe(0.99) // Fraction part of 0.99 is 0.99
    expect(frac(1.5)).toBe(0.5) // Fraction part of 1.5 is 0.5
  })

  it('should return the correct fractional part for negative floating point numbers', () => {
    expect(frac(-5.75)).toBe(-0.75) // Fraction part of -5.75 is -0.75
    expect(frac(-3.14)).toBe(-0.14000000000000012) // Fraction part of -3.14 is -0.14
    expect(frac(-0.99)).toBe(-0.99) // Fraction part of -0.99 is -0.99
    expect(frac(-1.5)).toBe(-0.5) // Fraction part of -1.5 is -0.5
  })

  it('should return 0 for zero', () => {
    expect(frac(0)).toBe(0)
    expect(frac(-0)).toBe(0)
  })

  it('should handle very small numbers correctly', () => {
    expect(frac(0.0001)).toBe(0.0001) // Fraction part of 0.0001 is 0.0001
    expect(frac(-0.0001)).toBe(-0.0001) // Fraction part of -0.0001 is -0.0001
  })

  it('should handle very large numbers', () => {
    expect(frac(1e8)).toBe(0) // No fractional part for large integers
    expect(frac(-1e8)).toBe(0) // No fractional part for large negative integers
  })
})
