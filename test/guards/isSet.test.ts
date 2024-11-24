import { describe, expect, it } from 'vitest'
import isSet from '../../src/guards/isSet'

describe('isSet', () => {
  it('works', () => {
    expect(isSet(0, 1)).toBe(false)
    expect(isSet(1, 0)).toBe(true)
    expect(isSet(2, 1)).toBe(true)

    expect(isSet(16, 4)).toBe(true)
    expect(isSet(35, 280376654)).toBe(false)
  })
})
