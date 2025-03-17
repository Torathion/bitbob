import { describe, expect, it } from 'vitest'
import toClosestPow2 from '../../../../src/utils/math/pow2/toClosestPow2'

describe('toClosestPow2', () => {
  it('prefers the higher power on equal distance', () => {
    expect(toClosestPow2(6)).toBe(8) // 6 is closer to 4 than 8
    expect(toClosestPow2(12)).toBe(16) // 12 is closer to 8 than 16
  })

  it('returns the next power of 2 when closer', () => {
    expect(toClosestPow2(10)).toBe(8) // 10 is closer to 8 than 4
    expect(toClosestPow2(24)).toBe(32) // 24 is closer to 32 than 16
  })

  it('returns the next power of 2 for halfway cases', () => {
    expect(toClosestPow2(8)).toBe(8) // Exactly 8, which is a power of 2
    expect(toClosestPow2(16)).toBe(16) // Exactly 16, which is a power of 2
  })

  it('handles edge cases with small numbers', () => {
    expect(toClosestPow2(1)).toBe(1) // 1 is already a power of 2
    expect(toClosestPow2(2)).toBe(2) // 2 is already a power of 2
  })

  it('handles large numbers', () => {
    expect(toClosestPow2(500)).toBe(512) // 500 is closer to 512 than 256
    expect(toClosestPow2(1000)).toBe(1024) // 1000 is closer to 1024 than 512
  })
})
