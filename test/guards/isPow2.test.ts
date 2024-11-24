import { describe, expect, it } from 'vitest'
import isPow2 from '../../src/guards/isPow2'

describe('isPow2', () => {
  it('works', () => {
    expect(isPow2(0)).toBe(false)
    expect(isPow2(1)).toBe(true)
    expect(isPow2(2)).toBe(true)
    expect(isPow2(19762354)).toBe(false)
    expect(isPow2(2048)).toBe(true)
  })
})
