import { describe, expect, it } from 'vitest'
import looseCompare from '../../src/guards/looseCompare'

describe('looseCompare', () => {
  it('works', () => {
    expect(looseCompare(1, 1, 0)).toBe(true)
    expect(looseCompare(1, 2, 1)).toBe(true)
    expect(looseCompare(1, 2, 0)).toBe(false)
    expect(looseCompare(19, 3, 1)).toBe(false)
    expect(looseCompare(3, 19, 1)).toBe(false)

    expect(looseCompare(16, 4, 12)).toBe(true)
    expect(looseCompare(-1, -1, 0)).toBe(true)
    expect(looseCompare(-1, 1, 2)).toBe(true)
  })
})
