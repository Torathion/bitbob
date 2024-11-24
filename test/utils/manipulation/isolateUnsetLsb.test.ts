import { describe, expect, it } from 'vitest'
import isolateUnsetLsb from '../../../src/utils/manipulation/isolateUnsetLsb'

describe('isolateUnsetLsb', () => {
  it('should isolate the least significant unset bit', () => {
    expect(isolateUnsetLsb(0b1010)).toBe(0b0001)
    expect(isolateUnsetLsb(0b1101)).toBe(0b0010)
    expect(isolateUnsetLsb(0b1110)).toBe(0b0001)
    expect(isolateUnsetLsb(0b1111)).toBe(0b10000)
  })

  it('should handle zero input', () => {
    expect(isolateUnsetLsb(0)).toBe(0b0001)
  })

  it('should work with negative numbers', () => {
    expect(isolateUnsetLsb(-0b1011)).toBe(0b10)
    expect(isolateUnsetLsb(-0b1111)).toBe(0b10)
    expect(isolateUnsetLsb(-1)).toBe(0b0000)
  })

  it('should handle large numbers correctly', () => {
    expect(isolateUnsetLsb(0xfffffffe)).toBe(0b0001)
    expect(isolateUnsetLsb(0x7fffffff)).toBe(1 << 31) // All bits set
  })
})
