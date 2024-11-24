import { describe, expect, it } from 'vitest'
import combine from '../../../src/utils/manipulation/combine'

describe('combine', () => {
  it('should combine two 16-bit parts into a 32-bit number', () => {
    const low16 = 0x5678
    const high16 = 0x1234
    const combined = combine(low16, high16)
    expect(combined).toBe(0x12345678)
  })

  it('should handle maximum 16-bit values', () => {
    expect(combine(0xffff, 0xffff)).toBe(0xffffffff) // Expected max 32-bit unsigned integer
  })

  it('should handle zero values', () => {
    expect(combine(0x0, 0x0)).toBe(0x0)
  })

  it('should handle mixed zero and max values', () => {
    const low16 = 0x0
    const high16 = 0xffff
    const combined = combine(low16, high16)
    expect(combined).toBe(0xffff0000)
  })
})
