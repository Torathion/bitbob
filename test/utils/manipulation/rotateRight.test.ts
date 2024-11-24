import { describe, expect, it } from 'vitest'
import rotateRight from '../../../src/utils/manipulation/rotateRight'

describe('rotateRight', () => {
  it('rotates bits correctly for small numbers', () => {
    expect(rotateRight(13, 1, 4)).toBe(14) // 13 (1101) -> 14 (1110)
    expect(rotateRight(13, 2, 4)).toBe(7) // 13 (1101) -> 7 (0111)
    expect(rotateRight(13, 3, 4)).toBe(11) // 13 (1101) -> 11  (1011)
  })

  it('handles cases where rotation exceeds bit-width', () => {
    expect(rotateRight(13, 5, 4)).toBe(14) // 5 % 4 = 1, same as rotate by 1
    expect(rotateRight(13, 8, 4)).toBe(13) // 8 % 4 = 0, no rotation
  })

  it('handles full-width rotation for 32-bit numbers', () => {
    expect(rotateRight(0b11110000111100001111000011110000, 4)).toBe(0b00001111000011110000111100001111)
    expect(rotateRight(0b1, 1)).toBe(0b1000000000000000000000000000000) // 1 -> rotated to MSB
  })

  it('works for edge cases with numBits < 32', () => {
    expect(rotateRight(0b1111, 1, 4)).toBe(0b1111) // All bits set
    expect(rotateRight(0b1000, 1, 4)).toBe(0b0100) // 1000 -> 0100
  })

  it('handles large values of d', () => {
    expect(rotateRight(13, 100, 4)).toBe(13) // 100 % 4 = 0
  })
})
