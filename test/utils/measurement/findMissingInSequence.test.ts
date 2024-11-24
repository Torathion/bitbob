import { describe, expect, it } from 'vitest'
import findMissingInSequence from '../../../src/utils/measurement/findMissingInSequence'

describe('findMissingInSequence', () => {
  it('finds the missing number in a sequence', () => {
    expect(findMissingInSequence([0, 1, 2, 4])).toBe(3) // Missing number is 3
    expect(findMissingInSequence([1, 2, 3, 4, 5])).toBe(0) // Missing number is 0
    expect(findMissingInSequence([0, 1, 3, 4, 5])).toBe(2) // Missing number is 2
  })

  it('handles the case where the missing number is the last one', () => {
    expect(findMissingInSequence([0, 1, 2, 3])).toBe(4) // Missing number is 4
    expect(findMissingInSequence([0, 1])).toBe(2) // Missing number is 2
  })

  it('handles the case where the sequence contains only one number', () => {
    expect(findMissingInSequence([1])).toBe(0) // Missing number is 0
    expect(findMissingInSequence([0])).toBe(1) // Missing number is 1
  })

  it('handles the case where the sequence is empty', () => {
    expect(findMissingInSequence([])).toBe(0) // Missing number is 0
  })

  it('handles large sequences', () => {
    const largeArray = Array.from({ length: 100000 }, (_, i) => i).filter(n => n !== 56789) // Missing number is 56789
    expect(findMissingInSequence(largeArray)).toBe(56789)
  })
})
