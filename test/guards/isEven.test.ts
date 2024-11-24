import { describe, expect, it } from 'vitest'
import isEven from '../../src/guards/isEven'

describe('isEven', () => {
  it('works', () => {
    expect(isEven(0)).toBe(true)
    expect(isEven(1)).toBe(false)
    expect(isEven(2)).toBe(true)
  })
})
