import { describe, expect, it } from 'vitest'
import rotateLeft from '../../../src/utils/manipulation/rotateLeft'

describe('rotateLeft', () => {
  it('rotates bits correctly for small numbers', () => {
    expect(rotateLeft(13, 1, 4)).toBe(11) // 13 (1101) -> 11 (1011)
    expect(rotateLeft(13, 2, 4)).toBe(7) // 13 (1101) -> 7 (0111)
    expect(rotateLeft(13, 3, 4)).toBe(14) // 13 (1101) -> 14 (1110)
  })

  it('handles cases where rotation exceeds bit-width', () => {
    expect(rotateLeft(13, 5, 4)).toBe(11) // 5 % 4 = 1, same as rotate by 1
    expect(rotateLeft(13, 8, 4)).toBe(13) // 8 % 4 = 0, no rotation
  })

  it('handles full-width rotation for 32-bit numbers', () => {
    expect(rotateLeft(0b11110000111100001111000011110000, 4, 31)).toBe(0b1111000011110000111100011110) // Rotating 32-bit value
    expect(rotateLeft(0b1, 1, 31)).toBe(0b10) // 1 -> rotated to MSB
  })

  it('works for edge cases with numBits < 32', () => {
    expect(rotateLeft(0b1111, 1, 4)).toBe(0b1111) // All bits set, no change
    expect(rotateLeft(0b1000, 1, 4)).toBe(0b0001) // 1000 (binary) -> 0001
  })

  it('handles large values of d', () => {
    expect(rotateLeft(13, 100, 4)).toBe(13) // 100 % 4 = 0
  })
})
