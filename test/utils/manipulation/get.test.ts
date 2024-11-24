import { describe, expect, it } from 'vitest'
import get from '../../../src/utils/manipulation/get'

describe('get', () => {
  it('retrieves the value of the specified bit', () => {
    expect(get(5, 0)).toBe(1) // 5 (binary: 101) -> bit 0 is 1
    expect(get(5, 1)).toBe(0) // 5 (binary: 101) -> bit 1 is 0
    expect(get(5, 2)).toBe(1) // 5 (binary: 101) -> bit 2 is 1
    expect(get(0, 3)).toBe(0) // 0 (binary: 000) -> bit 3 is 0
    expect(get(8, 3)).toBe(1) // 8 (binary: 1000) -> bit 3 is 1
  })

  it('works for negative numbers', () => {
    expect(get(-1, 0)).toBe(1) // -1 (binary: all 1s in two's complement) -> bit 0 is 1
    expect(get(-2, 1)).toBe(1) // -2 (binary: ...11111110) -> bit 1 is 1
    expect(get(-4, 2)).toBe(1) // -4 (binary: ...11111100) -> bit 2 is 1
  })

  it('returns 0 for out-of-range bits in positive numbers', () => {
    expect(get(5, 5)).toBe(0) // 5 (binary: 101) -> bit 5 is 0
    expect(get(1, 10)).toBe(0) // 1 (binary: 1) -> bit 10 is 0
  })
})
