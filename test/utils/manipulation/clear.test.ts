import { describe, expect, it } from 'vitest'
import clear from '../../../src/utils/manipulation/clear'

describe('clear function', () => {
  it('should clear the 1st bit (LSB)', () => {
    expect(clear(5, 1)).toBe(4) // 5 in binary is 101, clearing the first bit gives 100 (4)
  })

  it('should clear the 2nd bit', () => {
    expect(clear(5, 2)).toBe(5) // 5 in binary is 101, clearing the second bit changes nothing (5)
  })

  it('should clear the 3rd bit', () => {
    expect(clear(5, 3)).toBe(1) // 5 in binary is 101, clearing the third bit gives 001 (1)
  })

  it('should handle cases where the bit to clear is already 0', () => {
    expect(clear(0b0100, 4)).toBe(0b0100) // 4 in binary is 100, clearing the forth changes nothing
  })

  it('should handle clearing bits in a large number', () => {
    expect(clear(1023, 10)).toBe(511) // 1023 in binary is 1111111111, clearing the 10th bit gives 111111111
  })

  it('should return 0 when clearing the only set bit in 1', () => {
    expect(clear(1, 1)).toBe(0) // 1 in binary is 1, clearing the first bit gives 0
  })
})
