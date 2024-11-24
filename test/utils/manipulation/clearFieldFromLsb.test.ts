import { describe, expect, it } from 'vitest'
import clearFieldFromLsb from '../../../src/utils/manipulation/clearFieldFromLsb'

describe('clearFieldFromLsb', () => {
  it('works', () => {
    expect(clearFieldFromLsb(29, 3)).toBe(16)
    expect(clearFieldFromLsb(157, 5)).toBe(128)
    expect(clearFieldFromLsb(120, 3)).toBe(112)
  })
})
