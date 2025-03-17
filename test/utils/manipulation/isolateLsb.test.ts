import { describe, expect, it } from 'vitest'
import isolateLsb from '../../../src/utils/manipulation/isolateLsb'

describe('isolateLsb', () => {
  it('should isolate the least significant set bit', () => {
    expect(isolateLsb(0b1010)).toBe(0b0010)
    expect(isolateLsb(0b1100)).toBe(0b0100)
    expect(isolateLsb(0b1000)).toBe(0b1000)
    expect(isolateLsb(0b0001)).toBe(0b0001)
  })

  it('should return 0 for 0 input', () => {
    expect(isolateLsb(0)).toBe(0)
  })

  it('should work with negative numbers', () => {
    expect(isolateLsb(-0b1010)).toBe(0b0010)
    expect(isolateLsb(-0b1100)).toBe(0b0100)
  })

  it('should handle large numbers correctly', () => {
    expect(isolateLsb(0x80000000) >>> 0).toBe(0x80000000)
    expect(isolateLsb(0xffffffff)).toBe(1)
  })
})
