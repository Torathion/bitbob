import { describe, expect, it } from 'vitest'
import toPrevPow2 from '../../../../src/utils/math/pow2/toPrevPow2'

describe('toPrevPow2', () => {
  it('returns the largest power of 2 less than or equal to non-power-of-2 inputs', () => {
    expect(toPrevPow2(5)).toBe(4) // 4 is the largest power of 2 ≤ 5
    expect(toPrevPow2(15)).toBe(8) // 8 is the largest power of 2 ≤ 15
    expect(toPrevPow2(20)).toBe(16) // 16 is the largest power of 2 ≤ 20
  })

  it('returns the same number for inputs that are already powers of 2', () => {
    expect(toPrevPow2(1)).toBe(1)
    expect(toPrevPow2(2)).toBe(2)
    expect(toPrevPow2(8)).toBe(8)
    expect(toPrevPow2(64)).toBe(64)
  })

  it('handles large numbers correctly', () => {
    expect(toPrevPow2(1023)).toBe(512) // 512 is the largest power of 2 ≤ 1023
    expect(toPrevPow2(5000)).toBe(4096) // 4096 is the largest power of 2 ≤ 5000
  })
})
