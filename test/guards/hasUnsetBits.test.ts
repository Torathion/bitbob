import { describe, expect, it } from 'vitest'
import hasUnsetBits from '../../src/guards/hasUnsetBits'

describe('hasUnsetBits', () => {
  it('should return false for numbers with all bits set', () => {
    expect(hasUnsetBits(0b111111)).toBe(false) // 111111 (no unset bits)
    expect(hasUnsetBits(0b111111111111)).toBe(false) // 111111111111 (no unset bits)
    expect(hasUnsetBits(0xfffffff)).toBe(false) // 111111111111111111111111111111 (no unset bits)
  })

  it('should return true for numbers with unset bits', () => {
    expect(hasUnsetBits(0b101010)).toBe(true) // 101010 (has unset bits)
    expect(hasUnsetBits(0b1000001)).toBe(true) // 1000001 (has unset bits)
    expect(hasUnsetBits(0xaaaa)).toBe(true) // 101010101010 (has unset bits)
  })

  it('should return true for numbers with 0 as the least significant bit', () => {
    expect(hasUnsetBits(0b10)).toBe(true) // 10 (has unset bits)
    expect(hasUnsetBits(0b10000)).toBe(true) // 10000 (has unset bits)
  })

  it('should return false for 0', () => {
    expect(hasUnsetBits(0)).toBe(true) // 0 (has unset bits)
  })

  it('should return false for negative numbers', () => {
    expect(hasUnsetBits(-1)).toBe(false) // 1111111111111111
    expect(hasUnsetBits(-2)).toBe(true) //1111111111111110s
  })

  it('should handle large numbers with no unset bits', () => {
    expect(hasUnsetBits(0xfffff)).toBe(false) // 1111111111111
    expect(hasUnsetBits(0x7fffffff)).toBe(false)
  })

  it('should handle large numbers with no unset bits', () => {
    expect(hasUnsetBits(0xffffe)).toBe(true) // 11111111111111111110
    expect(hasUnsetBits(0x7fffefff)).toBe(true)
  })

  it('should return true for numbers with only the first bit set (e.g., 10, 100)', () => {
    expect(hasUnsetBits(0b10)).toBe(true) // 10 (has unset bits)
    expect(hasUnsetBits(0b100)).toBe(true) // 100 (has unset bits)
  })
})
