import { describe, expect, it } from 'vitest'
import length from '../../../src/utils/measurement/length'

describe('length', () => {
  it('works', () => {
    expect(length(0)).toBe(1)
    expect(length(2)).toBe(2)
    expect(length(4)).toBe(3)
    expect(length(16)).toBe(5)
  })

  it('handles large numbers', () => {
    // Screen resolutions
    expect(length(1920)).toBe(11)
    expect(length(1080)).toBe(11)
    expect(length(1 << 31)).toBe(31)
  })

  it('handles negative numbers', () => {
    expect(length(-1)).toBe(1)
    expect(length(-10)).toBe(5)
  })
})
