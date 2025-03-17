import { describe, expect, it } from 'vitest'
import roundNextMultPow2 from '../../../../src/utils/math/pow2/roundNextMultPow2'

describe('roundNextMultPow2', () => {
  it('rounds 10 to the next multiple of 4', () => {
    expect(roundNextMultPow2(10, 4)).toBe(12)
  })

  it('rounds 16 to the next multiple of 4', () => {
    expect(roundNextMultPow2(16, 4)).toBe(20)
  })

  it('rounds 15 to the next multiple of 8', () => {
    expect(roundNextMultPow2(15, 8)).toBe(16)
  })

  it('rounds 8 to the next multiple of 8', () => {
    expect(roundNextMultPow2(8, 8)).toBe(16)
  })

  it('rounds 100 to the next multiple of 16', () => {
    expect(roundNextMultPow2(100, 16)).toBe(112)
  })
})
