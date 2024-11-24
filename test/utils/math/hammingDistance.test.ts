import { describe, expect, it } from 'vitest'
import hammingDistance from '../../../src/utils/math/hammingDistance'

describe('hammingDistance', () => {
  it('works', () => {
    expect(hammingDistance(0, 0)).toBe(0)
    expect(hammingDistance(0, 1)).toBe(1)
    expect(hammingDistance(11, 13)).toBe(2)
    expect(hammingDistance(128, 1657)).toBe(8)
  })
})
