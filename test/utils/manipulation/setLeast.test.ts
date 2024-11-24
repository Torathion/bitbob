import { describe, expect, it } from 'vitest'
import setLeast from '../../../src/utils/manipulation/setLeast'

describe('setLeast function', () => {
  it('sets the least significant unset bit in a number', () => {
    expect(setLeast(5)).toBe(7) // Binary: 0101 -> 0111
    expect(setLeast(6)).toBe(7) // Binary: 0110 -> 0111
    expect(setLeast(15)).toBe(31) // Binary: 1111 -> 11111
  })

  it('handles numbers with all bits set', () => {
    expect(setLeast(0b1111)).toBe(0b11111) // Adds an extra bit
    expect(setLeast(0b111)).toBe(0b1111)
  })

  it('handles zero as input', () => {
    expect(setLeast(0)).toBe(1) // Binary: 0000 -> 0001
  })

  it('does not modify numbers where the least significant bit is already set', () => {
    expect(setLeast(1)).toBe(3) // Binary: 0001 -> 0011
  })
})
