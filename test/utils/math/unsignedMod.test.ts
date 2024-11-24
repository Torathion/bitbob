import { describe, expect, it } from 'vitest'
import unsignedMod from '../../../src/utils/math/unsignedMod'

describe('unsignedMod', () => {
  it('returns the correct unsigned remainder for positive numbers', () => {
    expect(unsignedMod(5, 3)).toBe(2) // 5 % 3 = 2
    expect(unsignedMod(10, 4)).toBe(2) // 10 % 4 = 2
    expect(unsignedMod(7, 7)).toBe(0) // 7 % 7 = 0
  })

  it('returns the correct unsigned remainder for negative numbers', () => {
    expect(unsignedMod(-1, 5)).toBe(4) // (-1 % 5 + 5) % 5 = 4
    expect(unsignedMod(-10, 6)).toBe(2) // (-10 % 6 + 6) % 6 = 2
    expect(unsignedMod(-7, 7)).toBe(0) // (-7 % 7 + 7) % 7 = 0
  })

  it('handles large numbers correctly', () => {
    expect(unsignedMod(1000000001, 2)).toBe(1) // 1000000001 % 3 = 1
    expect(unsignedMod(-1000000001, 3)).toBe(1) // (-1000000001 % 3 + 3) % 3 = 2
  })

  it('returns 0 for inputs that are multiples of the modulus', () => {
    expect(unsignedMod(15, 5)).toBe(0) // 15 % 5 = 0
    expect(unsignedMod(-15, 5)).toBe(0) // (-15 % 5 + 5) % 5 = 0
  })

  it('handles cases where modulus is 1', () => {
    expect(unsignedMod(1234, 1)).toBe(0) // Any number modulo 1 is 0
    expect(unsignedMod(-1234, 1)).toBe(0) // Any number modulo 1 is 0
  })
})
