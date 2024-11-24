import { describe, expect, it } from 'vitest'
import haveOppositeSigns from '../../src/guards/haveOppositeSigns'

describe('haveOppositeSigns', () => {
  it('works', () => {
    expect(haveOppositeSigns(1, 1)).toBe(false)
    expect(haveOppositeSigns(0, 0)).toBe(false)
    expect(haveOppositeSigns(-1, -1)).toBe(false)

    expect(haveOppositeSigns(-1, 1)).toBe(true)
    expect(haveOppositeSigns(1, -1)).toBe(true)
  })
})
