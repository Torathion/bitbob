import { describe, expect, it } from 'vitest'
import ceil from '../../../src/utils/math/ceil'

describe('ceil', () => {
  it('should return the number itself if it is already an integer', () => {
    expect(ceil(5)).toBe(5)
    expect(ceil(-5)).toBe(-5)
  })

  it('should round up positive floating point numbers', () => {
    expect(ceil(1.25)).toBe(2)
    expect(ceil(4.2)).toBe(5)
    expect(ceil(4.9)).toBe(5)
  })

  it('should round up negative floating point numbers (towards zero)', () => {
    expect(ceil(-4.2)).toBe(-4)
    expect(ceil(-4.9)).toBe(-4)
  })

  it('should return 0 for 0', () => {
    expect(ceil(0)).toBe(0)
  })

  it('should handle large numbers', () => {
    expect(ceil(1000000.1)).toBe(1000001)
    expect(ceil(-1000000.1)).toBe(-1000000)
  })

  it('should handle large negative numbers', () => {
    expect(ceil(-1000000.9)).toBe(-1000000)
  })
})
