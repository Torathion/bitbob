import { describe, expect, it } from 'vitest'
import doubleSign from '../../../src/utils/math/doubleSign'

describe('doubleSign', () => {
  it('should return [0, 0] for integer values', () => {
    expect(doubleSign(0)).toBe(0)
    expect(doubleSign(1)).toBe(0)
    expect(doubleSign(-1)).toBe(1)
  })
})
