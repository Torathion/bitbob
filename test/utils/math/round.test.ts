import { describe, expect, it } from 'vitest'
import round from '../../../src/utils/math/round'

describe('round', () => {
  it('rounds positive numbers correctly', () => {
    expect(round(4.3)).toBe(4)
    expect(round(4.7)).toBe(5)
    expect(round(10.5)).toBe(11) // Halfway case
  })

  it('rounds negative numbers correctly', () => {
    expect(round(-2.3)).toBe(-2)
    expect(round(-2.7)).toBe(-3)
    expect(round(-2.5)).toBe(-3) // Halfway case
  })

  it('handles integer inputs gracefully', () => {
    expect(round(4)).toBe(4)
    expect(round(-10)).toBe(-10)
  })

  it('handles edge cases', () => {
    expect(round(0)).toBe(0)
    expect(round(-0)).toBe(0)
  })
})
