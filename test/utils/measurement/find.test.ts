import { describe, it, expect } from 'vitest'
import find from '../../../src/utils/measurement/find'

describe('find', () => {
  it('finds the correct position of the bit sequence', () => {
    expect(find(102, 6)).toBe(1) // 110 inside 1100110
    expect(find(103, 6)).toBe(5) // 110 inside 1100111
    expect(find(255, 1)).toBe(1)
    expect(find(255, 15)).toBe(1)

    expect(find(1, 0)).toBe(-1)
    expect(find(0, 1)).toBe(-1)
    expect(find(255, 0)).toBe(-1)
  })

  it('handles same number', () => {
    expect(find(0, 0)).toBe(1)
    expect(find(14, 14)).toBe(1)
    expect(find(1 << 31, 1 << 31)).toBe(1)
  })

  it('fails for finding bigger numbers inside smaller numbers', () => {
    expect(find(0, 255)).toBe(-1)
    expect(find(15, 16)).toBe(-1)
  })
})
