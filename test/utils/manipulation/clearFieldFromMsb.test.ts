import { describe, expect, it } from 'vitest'
import clearFieldFromMsb from '../../../src/utils/manipulation/clearFieldFromMsb'

describe('clearFieldFromMsb', () => {
  it('works', () => {
    expect(clearFieldFromMsb(29, 4)).toBe(13)
    expect(clearFieldFromMsb(157, 5)).toBe(29)
    expect(clearFieldFromMsb(120, 1)).toBe(0)
  })
})
