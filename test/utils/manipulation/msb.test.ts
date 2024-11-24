import { describe, expect, it } from 'vitest'
import msb from '../../../src/utils/manipulation/msb'

describe('msb', () => {
  it('works', () => {
    expect(msb(0)).toBe(0)
    expect(msb(1)).toBe(1) // 1 (0001 in binary), MSB at position 0
    expect(msb(2)).toBe(2) // 2 (0010 in binary), MSB at position 1
    expect(msb(4)).toBe(4) // 4 (0100 in binary), MSB at position 2
    expect(msb(8)).toBe(8) // 8 (1000 in binary), MSB at position 3
    expect(msb(18)).toBe(16) // 18 (10010 in binary), MSB at position 4
  })
})
