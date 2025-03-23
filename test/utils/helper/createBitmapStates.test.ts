import { describe, expect, it } from 'vitest'
import createBitmapStates from '../../../src/utils/helper/createBitmapStates'

describe('createBitmapStates', () => {
  it('should create a LUT with unique bit flags for basic input', () => {
    const keys = ['read', 'write', 'execute']
    const expected = { read: 1, write: 2, execute: 4 }
    const result = createBitmapStates(keys)
    expect(result).toEqual(expected)
  })

  it('should return an empty object for an empty array', () => {
    const keys: string[] = []
    const expected = {}
    const result = createBitmapStates(keys)
    expect(result).toEqual(expected)
  })

  it('should handle a single key correctly', () => {
    const keys = ['active']
    const expected = { active: 1 }
    const result = createBitmapStates(keys)
    expect(result).toEqual(expected)
  })

  it('should overwrite duplicate keys with the last occurrence', () => {
    const keys = ['read', 'read', 'write']
    const expected = { read: 2, write: 4 } // Last 'read' overwrites the first
    const result = createBitmapStates(keys)
    expect(result).toEqual(expected)
  })

  it('should generate correct bit flags for a large number of keys', () => {
    const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const expected = {
      a: 1, // 2^0
      b: 2, // 2^1
      c: 4, // 2^2
      d: 8, // 2^3
      e: 16, // 2^4
      f: 32, // 2^5
      g: 64, // 2^6
      h: 128 // 2^7
    }
    const result = createBitmapStates(keys)
    expect(result).toEqual(expected)
  })

  it('should handle 32 keys without exceeding JavaScript safe integer limits', () => {
    const keys = Array.from({ length: 32 }, (_, i) => `key${i}`)
    const result = createBitmapStates(keys)
    expect(result['key0']).toBe(1) // 2^0
    expect(result['key31']).toBe(1 << 31) // 2^31
    expect(Object.keys(result).length).toBe(32)
  })
})
