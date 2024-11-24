import { describe, it, expect } from 'vitest'
import clearField from '../../../src/utils/manipulation/clearField'

describe('clearField function', () => {
  it('should clear the 1st bit (LSB)', () => {
    expect(clearField(5, 1, 0)).toBe(4) // 5 in binary is 101, clearing the 1st bit gives 100 (4)
  })

  it('should clear the 2nd bit', () => {
    expect(clearField(5, 1, 1)).toBe(5) // 5 in binary is 101, clearing the 2nd bit changes nothing (5)
  })

  it('should clear the 3rd bit', () => {
    expect(clearField(5, 1, 2)).toBe(1) // 5 in binary is 101, clearing the 3rd bit gives 001 (1)
  })

  it('should clear a 2-bit field starting at position 2', () => {
    expect(clearField(15, 2, 3)).toBe(7) // 15 in binary is 1111, clearing the 3rd and 4th bits gives 0011 (7)
  })

  it('should handle large numbers and clear a field', () => {
    expect(clearField(1023, 5, 2)).toBe(899) // 1023 in binary is 1111111111, clearing the 5 bits starting from position 2 gives 1110000011
  })

  it('should not change the number if the field is already clear', () => {
    expect(clearField(4, 1, 3)).toBe(4) // 4 in binary is 100, field is already clear, no change
  })
})
