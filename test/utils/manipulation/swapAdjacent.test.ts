import { describe, expect, it } from 'vitest'
import swapAdjacent from '../../../src/utils/manipulation/swapAdjacent'

describe('swapAdjacent function', () => {
  it('swaps adjacent bits correctly', () => {
    expect(swapAdjacent(0b10101010)).toBe(0b01010101) // Even and odd bits swapped
  })

  it('handles numbers with all bits set', () => {
    expect(swapAdjacent(0b11111111)).toBe(0b11111111) // Swapping adjacent bits results in the same value
  })

  it('handles numbers with no bits set', () => {
    expect(swapAdjacent(0b00000000)).toBe(0b00000000) // No bits to swap
  })

  it('handles single-bit swaps correctly', () => {
    expect(swapAdjacent(0b00000010)).toBe(0b00000001) // Single-bit swaps
    expect(swapAdjacent(0b00000001)).toBe(0b00000010)
  })
})
