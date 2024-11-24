import { describe, expect, it } from 'vitest'
import rightPropagate from '../../../src/utils/manipulation/rightPropagate'

describe('rightPropagate', () => {
  it('should propagate the rightmost set bit and set all lower bits to 1', () => {
    expect(rightPropagate(0b1100)).toBe(0b1111) // 12 -> 15
    expect(rightPropagate(0b0110)).toBe(0b0111) // 6 -> 7
    expect(rightPropagate(0b10100)).toBe(0b10111) // 20 -> 23
    expect(rightPropagate(0b1000)).toBe(0b1111) // 8 -> 15
  })

  it('should handle numbers that already have all bits set to 1 correctly', () => {
    expect(rightPropagate(0b1111)).toBe(0b1111) // 15 -> 15 (no change)
    expect(rightPropagate(0b11111111)).toBe(0b11111111) // 255 -> 255
  })

  it('should handle edge cases like 0', () => {
    expect(rightPropagate(0)).toBe(1) // 0 -> 0 (no change)
  })

  it('should handle large numbers correctly', () => {
    expect(rightPropagate(0b10000000000000000000000000000000)).toBe(0b11111111111111111111111111111111) // 0x80000000 -> 0xFFFFFFFF
    expect(rightPropagate(0b1000000000000000000000000000001)).toBe(0b1000000000000000000000000000001) // No change, because the most right bit is already set.
  })
})
