import { describe, expect, it } from 'vitest'
import iLogPow2 from '../../../../src/utils/math/pow2/iLogPow2'

describe('iLogPow2', () => {
  // Test basic functionality with known values
  it('should compute correct values for powers of 2', () => {
    expect(iLogPow2(1)).toBe(0) // log2(1) = 0
    expect(iLogPow2(2)).toBe(1) // log2(2) = 1
    expect(iLogPow2(4)).toBe(2) // log2(4) = 2
    expect(iLogPow2(8)).toBe(3) // log2(8) = 3
    expect(iLogPow2(16)).toBe(4) // log2(16) = 4
    expect(iLogPow2(32)).toBe(5) // log2(32) = 5
  })
  // Test large numbers
  it('should handle large numbers', () => {
    expect(iLogPow2(1024)).toBe(10) // log2(1024) = 10
    expect(iLogPow2(65536)).toBe(16) // log2(65536) = 16
  })
})
