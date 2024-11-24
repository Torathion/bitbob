import { describe, expect, it } from 'vitest'
import haveSameSigns from '../../src/guards/haveSameSigns'

describe('haveSameSigns', () => {
  it('works', () => {
    expect(haveSameSigns(1, 1)).toBe(true)
    expect(haveSameSigns(0, 0)).toBe(true)
    expect(haveSameSigns(-1, -1)).toBe(true)

    expect(haveSameSigns(-1, 1)).toBe(false)
    expect(haveSameSigns(1, -1)).toBe(false)
  })
})
