import { describe, expect, test } from 'vitest'
import diffLsb from '../../../src/utils/manipulation/diffLsb'

describe('diffLsb', () => {
  test('should return the least significant differing bit position as 2^x', () => {
    expect(diffLsb(6, 10)).toBe(4) // 6 (0110) vs 10 (1010) -> the least significant differing bit is at position 2
    expect(diffLsb(7, 5)).toBe(2) // 7 (0111) vs 5 (0101) -> the least significant differing bit is at position 1
    expect(diffLsb(12, 8)).toBe(4) // 12 (1100) vs 8 (1000) -> the least significant differing bit is at position 2
    expect(diffLsb(15, 14)).toBe(1) // 15 (1111) vs 14 (1110) -> the least significant differing bit is at position 0
    expect(diffLsb(1, 3)).toBe(2) // 1 (0001) vs 3 (0011) -> the least significant differing bit is at position 1
    expect(diffLsb(5, 7)).toBe(2) // 5 (0101) vs 7 (0111) -> the least significant differing bit is at position 1
    expect(diffLsb(8, 10)).toBe(2) // 8 (1000) vs 10 (1010) -> the least significant differing bit is at position 1
  })

  test('should return 0 for identical numbers', () => {
    expect(diffLsb(0, 0)).toBe(0)
    expect(diffLsb(15, 15)).toBe(0)
    expect(diffLsb(255, 255)).toBe(0)
  })

  test('should return correct value for larger numbers', () => {
    expect(diffLsb(1024, 2048)).toBe(1024) // 1024 (10000000000) vs 2048 (100000000000) -> position 10
    expect(diffLsb(65536, 131072)).toBe(65536) // 65536 (100000000000000) vs 131072 (1000000000000000) -> position 16
  })
})
