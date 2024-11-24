import { describe, expect, it } from 'vitest'
import toNextPow2 from '../../../src/utils/math/toNextPow2'

describe('toNextPow2', () => {
  it('returns the next power of 2 for non-power-of-2 inputs', () => {
    expect(toNextPow2(5)).toBe(8) // Next power of 2 after 5 is 8
    expect(toNextPow2(15)).toBe(16) // Next power of 2 after 15 is 16
    expect(toNextPow2(20)).toBe(32) // Next power of 2 after 20 is 32
  })

  it('returns the same number for inputs that are already powers of 2', () => {
    expect(toNextPow2(1)).toBe(1)
    expect(toNextPow2(2)).toBe(2)
    expect(toNextPow2(8)).toBe(8)
    expect(toNextPow2(64)).toBe(64)
  })

  it('returns 1 for input 0', () => {
    expect(toNextPow2(0)).toBe(1) // Smallest power of 2 is 1
  })

  it('handles large numbers correctly', () => {
    expect(toNextPow2(1023)).toBe(1024) // Next power of 2 after 1023 is 1024
    expect(toNextPow2(5000)).toBe(8192) // Next power of 2 after 5000 is 8192
  })
})
