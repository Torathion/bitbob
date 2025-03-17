import { describe, it, expect } from 'vitest'
import nextAfter from '../../../src/utils/manipulation/nextAfter'

describe('nextAfter', () => {
  it('should return NaN if x is NaN', () => {
    expect(nextAfter(NaN, 1)).toBeNaN()
  })

  it('should return NaN if to is NaN', () => {
    expect(nextAfter(1, NaN)).toBeNaN()
  })

  it('should return x if x equals to', () => {
    expect(nextAfter(1, 1)).toBe(1)
  })

  it('should return smallest positive subnormal if x is 0 and to > 0', () => {
    const result = nextAfter(0, 1)
    expect(result).toBe(2 ** -1074) // Matches SMALLEST_DENORM
    expect(result).toBeGreaterThan(0)
    expect(result).toBeLessThan(1e-307) // Should be a very small positive value
  })

  it('should return smallest negative subnormal if x is 0 and to < 0', () => {
    const result = nextAfter(0, -1)
    expect(result).toBe(-(2 ** -1074)) // Matches -SMALLEST_DENORM
    expect(result).toBeLessThan(0)
    expect(result).toBeGreaterThan(-1e-307) // Should be a very small negative value
  })

  it('should increment towards a larger positive number', () => {
    const x = 1.0
    const result = nextAfter(x, 2.0)
    expect(result).toBeGreaterThan(x)
    expect(result - x).toBeLessThan(2.23e-16) // Approximate epsilon for 1.0 in double-precision
  })

  it('should decrement towards a smaller positive number', () => {
    const x = 1.0
    const result = nextAfter(x, 0.5)
    expect(result).toBeLessThan(x)
    expect(x - result).toBeLessThan(2.23e-16) // Approximate epsilon for 1.0 in double-precision
  })

  it('should increment towards a larger negative number', () => {
    const x = -1.0
    const result = nextAfter(x, -2.0)
    expect(result).toBeLessThan(x)
    expect(x - result).toBeLessThan(2.23e-16) // Approximate epsilon for -1.0 in double-precision
  })

  it('should decrement towards a smaller negative number', () => {
    const x = -1.0
    const result = nextAfter(x, -0.5)
    expect(result).toBeGreaterThan(x)
    expect(result - x).toBeLessThan(2.23e-16) // Approximate epsilon for -1.0 in double-precision
  })

  it('should handle transition across zero', () => {
    const result = nextAfter(-(2 ** -1074), 1)
    expect(result).toBe(-0) // Should move towards zero first
  })
})
