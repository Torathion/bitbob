import { describe, expect, it, test } from 'vitest'
import modPow2 from '../../../src/utils/math/modPow2'

describe('modPow2', () => {
  test('modulus with various powers of 2', () => {
    expect(modPow2(10, 2)).toBe(0) // 10 % 2 = 0
    expect(modPow2(10, 4)).toBe(2) // 10 % 4 = 2
    expect(modPow2(10, 8)).toBe(2) // 10 % 8 = 2
    expect(modPow2(15, 8)).toBe(7) // 15 % 8 = 7
  })

  test('modulus with large powers of 2', () => {
    expect(modPow2(1023, 512)).toBe(511) // 1023 % 512 = 511
    expect(modPow2(1023, 256)).toBe(255) // 1023 % 256 = 255
  })

  test('modulus with negative numbers', () => {
    expect(modPow2(-10, 8)).toBe(6) // -10 % 8 = 6
    expect(modPow2(-15, 8)).toBe(1) // -15 % 8 = 1
  })

  test('modulus with zero', () => {
    expect(modPow2(0, 8)).toBe(0) // 0 % 8 = 0
  })

  it('throws returns -1 with an invalid power.', () => {
    expect(modPow2(10, 0)).toBe(-1) // Division by zero
    expect(modPow2(10, 3)).toBe(-1) // Non-power-of-2 divisor
  })
})
