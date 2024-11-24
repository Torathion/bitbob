import { describe, expect, it } from 'vitest'
import isDenormalized from '../../src/guards/isDenormalized'

describe('isDenormalized', () => {
  it('works', () => {
    expect(isDenormalized(1)).toBe(false)
    expect(isDenormalized(2)).toBe(false)
    expect(isDenormalized(2 ** -1022)).toBe(false)

    expect(isDenormalized(0)).toBe(true)
    expect(isDenormalized(2 ** -1024)).toBe(true)
  })
})
