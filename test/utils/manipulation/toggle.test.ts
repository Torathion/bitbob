import { describe, expect, it } from 'vitest'
import toggle from '../../../src/utils/manipulation/toggle'

describe('toggle function', () => {
  it('toggles the bit correctly', () => {
    expect(toggle(5, 1)).toBe(4) // Toggle the least significant bit of 5 (101 → 100)
    expect(toggle(5, 3)).toBe(1) // Toggle the third bit of 5 (101 → 001)
    expect(toggle(10, 2)).toBe(8) // Toggle the second bit of 10 (1010 → 1000)
    expect(toggle(15, 4)).toBe(7) // Toggle the fourth bit of 15 (1111 → 0111)
  })

  it('works for numbers with all bits set', () => {
    expect(toggle(15, 4)).toBe(7) // Toggle the fourth bit of 15 (1111 → 0111)
    expect(toggle(15, 1)).toBe(14) // Toggle the least significant bit (1111 → 1110)
  })

  it('works for numbers with no bits set', () => {
    expect(toggle(0, 1)).toBe(1) // Toggle the least significant bit of 0 (0000 → 0001)
    expect(toggle(0, 2)).toBe(2) // Toggle the second bit of 0 (0000 → 0010)
  })

  it('works for large numbers', () => {
    expect(toggle(1024, 10)).toBe(1536) // Toggle the 10th bit of 1024 (10000000000 → 100000000000)
    expect(toggle(1024, 11)).toBe(0) // Toggle the 11h bit of 1024 (10000000000 → 000000000000)
  })
})
