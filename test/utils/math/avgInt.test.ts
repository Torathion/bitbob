import { describe, expect, it } from 'vitest'
import avgInt from '../../../src/utils/math/avgInt'

describe('avgInt', () => {
  it('should return the average of two positive integers', () => {
    expect(avgInt(4, 6)).toBe(5)
    expect(avgInt(10, 20)).toBe(15)
  })

  it('should return the average of two negative integers', () => {
    expect(avgInt(-4, -6)).toBe(-5)
    expect(avgInt(-10, -20)).toBe(-15)
  })

  it('should return the average of one positive and one negative integer', () => {
    expect(avgInt(4, -6)).toBe(-1) // (4 + -6) >> 1 = -2 >> 1 = -1
    expect(avgInt(-10, 20)).toBe(5) // (-10 + 20) >> 1 = 10 >> 1 = 5
  })

  it('should handle the case of two zeros', () => {
    expect(avgInt(0, 0)).toBe(0)
  })

  it('should handle large numbers', () => {
    expect(avgInt(1000000, 2000000)).toBe(1500000)
    expect(avgInt(-1000000, -2000000)).toBe(-1500000)
  })

  it('should handle edge case where one number is much larger than the other', () => {
    expect(avgInt(1000000, 0)).toBe(500000)
    expect(avgInt(-1000000, -0)).toBe(-500000)
  })
})
