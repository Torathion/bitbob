import { describe, expect, it } from 'vitest'
import isolateRight from '../../../src/utils/manipulation/isolateRight'

describe('isolateRight', () => {
  it('should isolate the least significant bits up to the given position', () => {
    // Example: Isolating the 3 least significant bits
    expect(isolateRight(0b11110000, 3)).toBe(0b00000000)

    // Example: Isolating the 4 least significant bits
    expect(isolateRight(0b10101100, 4)).toBe(0b00001100)

    // Edge case: Isolating 0 bits
    expect(isolateRight(0b10101100, 0)).toBe(0)

    // Edge case: Isolating all bits
    expect(isolateRight(0b10101100, 8)).toBe(0b10101100)

    // Large number test
    expect(isolateRight(0b111111111111, 5)).toBe(0b00011111)
  })

  it('should handle edge cases correctly', () => {
    // If bit position is greater than the bit length of x
    expect(isolateRight(0b1010, 10)).toBe(0b1010)

    // If x is 0, the result should always be 0
    expect(isolateRight(0, 5)).toBe(0)
    expect(isolateRight(0, 0)).toBe(0)
  })

  it('should handle negative bit values (treat as 0)', () => {
    // A negative bit position should be treated as isolating nothing
    expect(isolateRight(0b11110000, -1)).toBe(240)
  })
})
