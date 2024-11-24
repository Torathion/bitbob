import { describe, expect, it } from 'vitest'
import commonLsb from '../../../src/utils/manipulation/commonLsb'

describe('commonLsb', () => {
  it('handles normal numbers', () => {
    expect(commonLsb(6, 10)).toBe(2)
    expect(commonLsb(14, 11)).toBe(2)
    expect(commonLsb(7, 3)).toBe(1)
    expect(commonLsb(72, 8)).toBe(8)
  })

  it('handles 0', () => {
    expect(commonLsb(8, 4)).toBe(0)
    expect(commonLsb(0, 0)).toBe(0)
    expect(commonLsb(0, 5)).toBe(0)
    expect(commonLsb(5, 0)).toBe(0)
  })

  it('handles negative numbers', () => {
    expect(commonLsb(-4, -8)).toBe(8)
    expect(commonLsb(-7, 3)).toBe(1)
    expect(commonLsb(-16, -16)).toBe(16)
  })

  it('should handles large integers', () => {
    const largeNumber1 = 0b10100000000000000000000000000000
    const largeNumber2 = 0b01000000000000000000000000000000
    expect(commonLsb(largeNumber1, largeNumber2)).toBe(0) // No common LSB
  })
})
