import { describe, expect, it } from 'vitest'
import clearLsb from '../../../src/utils/manipulation/clearLsb'

describe('clearLsb function', () => {
  it('should unset the least significant set bit in 5', () => {
    expect(clearLsb(5)).toBe(4) // 5 in binary is 101, clearing the least significant bit gives 100 (4)
  })

  it('should unset the least significant set bit in 8', () => {
    expect(clearLsb(8)).toBe(0) // 8 in binary is 1000, clearing the least significant bit gives 0000 (0)
  })

  it('should unset the least significant set bit in 14', () => {
    expect(clearLsb(14)).toBe(12) // 14 in binary is 1110, clearing the least significant bit gives 1100 (12)
  })

  it('should return 0 when called with 1', () => {
    expect(clearLsb(1)).toBe(0) // 1 in binary is 1, clearing the least significant bit gives 0
  })

  it('should handle large numbers correctly', () => {
    expect(clearLsb(1024)).toBe(0) // 1024 in binary is 10000000000, clearing the only set bit
    expect(clearLsb(1023)).toBe(1022) // 1023 in binary is 111111111, clearing the least set is 111111110
  })

  it('should return the same number if no set bits exist', () => {
    expect(clearLsb(0)).toBe(0) // No set bits, the result is still 0
  })

  it('should unset the least significant bit when there are multiple set bits', () => {
    expect(clearLsb(15)).toBe(14) // 15 in binary is 1111, clearing the least significant bit gives 1110 (14)
  })
})
