import { describe, expect, it } from 'vitest'
import createSizeMask from '../../../src/utils/helper/createSizeMask'

describe('createSizeMask', () => {
  it('works', () => {
    expect(createSizeMask(0)).toBe(-1)
    expect(createSizeMask(1)).toBe(1)

    for (let i = 2; i < 10; i++) expect(createSizeMask(i)).toBe((2 << (i - 1)) - 1)
  })

  it('works with shift', () => {
    expect(createSizeMask(1, 2)).toBe(4) // 100
    expect(createSizeMask(2, 5)).toBe(96) // 1100000
  })
})
