import { describe, expect, it } from 'vitest'
import expOf from '../../../src/utils/math/expOf'

describe('expOf', () => {
  it('should return [0, 0] for integer values', () => {
    expect(expOf(1)).toBe(0)
    expect(expOf(0.5)).toBe(-1)
  })
})
