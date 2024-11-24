import { describe, expect, it } from 'vitest'
import countTrailingOnes from '../../../src/utils/measurement/countTrailingOnes'

describe('countTrailingOnes', () => {
  it('should count trailing ones correctly', () => {
    expect(countTrailingOnes(0b111)).toBe(3) // 111
    expect(countTrailingOnes(0b1011)).toBe(2) // 1011
    expect(countTrailingOnes(0b110111)).toBe(3) // 110111
    expect(countTrailingOnes(0b1000001)).toBe(1) // 1000001
    expect(countTrailingOnes(0b1111111111111)).toBe(13) // 1111111111111
  })

  it('should return 0 for numbers without trailing ones', () => {
    expect(countTrailingOnes(0b1000)).toBe(0) // 1000 (no trailing ones)
    expect(countTrailingOnes(0b11010000)).toBe(0) // 11010000 (no trailing ones)
    expect(countTrailingOnes(0b1)).toBe(1) // 1 (the only one is the trailing one)
  })

  it('should return 0 for zero', () => {
    expect(countTrailingOnes(0)).toBe(0) // 0 (no trailing ones)
  })

  it('should return 0 for negative numbers', () => {
    expect(countTrailingOnes(-1)).toBe(0)
    expect(countTrailingOnes(-2)).toBe(0)
    expect(countTrailingOnes(-100)).toBe(0)
  })

  it('should return 0 for very large numbers with no trailing ones', () => {
    expect(countTrailingOnes(0x80000000)).toBe(0) // 10000000000000000000000000000000 (no trailing ones)
  })

  it('should return correct value for numbers with only trailing ones', () => {
    expect(countTrailingOnes(0b11111111)).toBe(8) // 11111111
  })

  it('should work with numbers with mixed trailing set bits and unset bits', () => {
    expect(countTrailingOnes(0b11011111)).toBe(5) // 11011111
    expect(countTrailingOnes(0b1001111)).toBe(4) // 1001111
  })
})
