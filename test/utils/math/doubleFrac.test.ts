import { describe, expect, it } from 'vitest'
import doubleFrac from '../../../src/utils/math/doubleFrac'

describe('doubleFrac', () => {
  it('works', () => {
    expect(doubleFrac(1)).toEqual([0, 1 << 20])
    expect(doubleFrac(-1)).toEqual([0, 1 << 20])
  })

  it('should handle edge case with numbers that have high precision fractions', () => {
    // This tests fractions that have large numbers in the fractional part
    const n = 1.0000000000001
    const [low, high] = doubleFrac(n)
    expect(low).toBeGreaterThan(0) // Should have a non-zero low part
    expect(high).toBeGreaterThan(0) // High part should also be non-zero
  })
})
