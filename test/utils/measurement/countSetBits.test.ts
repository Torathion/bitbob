import { describe, expect, it } from 'vitest'
import countSetBits from '../../../src/utils/measurement/countSetBits'

describe('countSetBits', () => {
  it('works', () => {
    expect(countSetBits(0)).toBe(0)
    expect(countSetBits(2)).toBe(1)
    expect(countSetBits(3)).toBe(2)
    expect(countSetBits(15)).toBe(4)
  })
})
