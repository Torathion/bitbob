import { describe, expect, it } from 'vitest'
import wrap from '../../../src/utils/manipulation/wrap'

describe('wrap', () => {
  it('converts positive numbers within range correctly', () => {
    expect(wrap(512, 10)).toBe(-512) // 512 in 10 bits wraps to -512
    expect(wrap(1023, 10)).toBe(-1) // Max unsigned value wraps to -1
  })

  it('converts negative numbers correctly', () => {
    expect(wrap(-1, 10)).toBe(-1) // Negative value remains negative
    expect(wrap(-512, 10)).toBe(-512) // Minimum signed value remains the same
  })

  it('wraps numbers exceeding the range correctly', () => {
    expect(wrap(2048, 10)).toBe(0) // Wraps back to 0
    expect(wrap(1024, 10)).toBe(0) // Wraps to 0 due to overflow
    expect(wrap(1536, 10)).toBe(-512) // Wraps to -512 within range
  })

  it('converts zero correctly', () => {
    expect(wrap(0, 10)).toBe(0) // Zero remains zero
  })

  it('handles edge cases for bit limits', () => {
    expect(wrap(-1024, 10)).toBe(0) // Out of range wraps to 0
    expect(wrap(1023, 10)).toBe(-1) // Max unsigned value in range becomes -1
  })

  it('works with large numbers and limits', () => {
    expect(wrap(65535, 16)).toBe(-1) // 16-bit max value wraps to -1
    expect(wrap(32768, 16)).toBe(-32768) // Half of 16-bit range becomes negative
    expect(wrap(-32769, 16)).toBe(32767) // Wraps back to max positive value
  })
})
