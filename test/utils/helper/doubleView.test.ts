import { describe, expect, it } from 'vitest'
import { toDouble, getLow, getHigh } from '../../../src/utils/helper/doubleView'

describe('doubleView', () => {
  it('works', () => {
    expect(getLow(1)).toBe(0)
    expect(getHigh(1)).toBe(0x3ff00000)
    expect(toDouble(0, 0x3ff00000)).toBe(1)
  })
})
