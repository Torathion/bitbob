import { describe, expect, it } from 'vitest'
import unsignedWrap from '../../../src/utils/manipulation/unsignedWrap'

describe('unsignedWrap', () => {
  it('should convert numbers to unsigned values within a limited range', () => {
    expect(unsignedWrap(256, 8)).toBe(0) // 256 % 256 = 0
    expect(unsignedWrap(1000, 8)).toBe(232) // 1000 % 256 = 232
    expect(unsignedWrap(-1, 8)).toBe(255) // -1 as unsigned 8-bit is 255
    expect(unsignedWrap(1024, 10)).toBe(0) // 1024 % 1024 = 0
    expect(unsignedWrap(-1000, 16)).toBe(64536) // Negative value becomes large positive value in 16-bit range
    expect(unsignedWrap(65535, 10)).toBe(1023)
  })

  it('should handle edge cases', () => {
    expect(unsignedWrap(0, 16)).toBe(0) // 0 in any range
    expect(unsignedWrap(1023, 10)).toBe(1023) // Max value for 10-bit range
    expect(unsignedWrap(-1024, 10)).toBe(1024) // Negative value clamped to range
  })
})
