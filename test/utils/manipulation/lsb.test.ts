import { describe, expect, it } from 'vitest'
import lsb from '../../../src/utils/manipulation/lsb'

describe('lsb', () => {
  it('works', () => {
    expect(lsb(0)).toBe(0)
    expect(lsb(1)).toBe(1)
    expect(lsb(12)).toBe(4)
    expect(lsb(1257)).toBe(1)
    expect(lsb(120)).toBe(8)
  })
})
