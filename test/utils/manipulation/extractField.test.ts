import { describe, expect, test } from 'vitest'
import extractField from '../../../src/utils/manipulation/extractField'

describe('extractField', () => {
  test('should extract field correctly with size and shift', () => {
    expect(extractField(48493, 4, 7)).toBe(10) // Should extract bits '1010' (decimal 10) from position 7 with size 4
    expect(extractField(0b110110, 3, 2)).toBe(5) // Extract 3 bits starting from position 2 (binary 110)
    expect(extractField(0b110110, 2, 1)).toBe(3) // Extract 2 bits starting from position 1 (binary 11)
    expect(extractField(0b101010101010, 4, 0)).toBe(10) // Extract 4 bits from start (binary 1010)
    expect(extractField(0b101010101010, 4, 4)).toBe(10) // Extract 4 bits starting from position 4 (binary 1010)
    expect(extractField(0b101010101010, 12, 0)).toBe(0b101010101010) // Extract all 12 bits (binary 101010101010)
    expect(extractField(0b101010101010, 1, 11)).toBe(1) // Extract the most significant bit (binary 1)
    expect(extractField(0b101010101010, 1, 0)).toBe(0) // Extract the least significant bit (binary 0)
    expect(extractField(0b101, 2, 0)).toBe(1) // Extract 2 bits (should get binary '01', which is 1)
    expect(extractField(0b111, 2, 1)).toBe(3) // Extract 2 bits from position 1 (binary '11', which is 3)
    expect(extractField(0x1234567890abcdef, 4, 60)).toBe(0x9) // Extract 4 bits from position 60, should get binary '1001' (decimal 9)
  })
})
