import { describe, expect, it } from 'vitest'
import set from '../../../src/utils/manipulation/set'
import { I32_MIN } from '../../../src/constants'

describe('set function', () => {
  it('sets the specified bit in the number', () => {
    expect(set(8, 1)).toBe(10) // 8 (1000) OR 2 (0010) = 10 (1010)
    expect(set(0, 3)).toBe(8) // 0 (0000) OR 8 (1000) = 8 (1000)
    expect(set(15, 4)).toBe(31) // 15 (1111) OR 16 (10000) = 31 (11111)
    expect(set(32, 0)).toBe(33) // 32 (100000) OR 1 (000001) = 33 (100001)
    expect(set(5, 2)).toBe(5) // 5 (0101) OR 4 (0100) = 5 (0101)
  })

  it('does not modify the number if the bit is already set', () => {
    expect(set(7, 0)).toBe(7) // 7 (0111) remains unchanged when setting bit 0
    expect(set(7, 1)).toBe(7) // 7 (0111) remains unchanged when setting bit 1
    expect(set(7, 2)).toBe(7) // 7 (0111) remains unchanged when setting bit 2
  })

  it('handles edge cases for large bit indices', () => {
    expect(set(0, 31)).toBe(I32_MIN) // Sets the 31st bit in 0
    expect(set(0, 0)).toBe(1) // Sets the 0th bit in 0
  })
})
