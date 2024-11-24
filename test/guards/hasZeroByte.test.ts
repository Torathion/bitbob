import { describe, expect, it } from 'vitest'
import hasZeroByte from '../../src/guards/hasZeroByte'

describe('hasZeroByte', () => {
  it('works', () => {
    expect(hasZeroByte(0)).toBe(true)
    expect(hasZeroByte(1)).toBe(true)
    expect(hasZeroByte(66721)).toBe(true)

    expect(hasZeroByte(1073808545)).toBe(false)
  })
})
