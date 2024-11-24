import { describe, expect, it } from 'vitest'
import isPalindrome from '../../src/guards/isPalindrome'

describe('isPalindrome', () => {
  it('returns true for numbers with bit sequences that are palindromes', () => {
    expect(isPalindrome(0b101)).toBe(true) // 101 is a palindrome
    expect(isPalindrome(0b1001)).toBe(true) // 1001 is a palindrome
    expect(isPalindrome(0b110011)).toBe(true) // 110011 is a palindrome
    expect(isPalindrome(0b1111)).toBe(true) // 1111 is a palindrome
    expect(isPalindrome(0b1)).toBe(true) // 1 is a palindrome (only one bit)
    expect(isPalindrome(0b101010101010101)).toBe(true) // Odd-length palindrome
  })

  it('returns false for numbers with bit sequences that are not palindromes', () => {
    expect(isPalindrome(0b110)).toBe(false) // 110 is not a palindrome
    expect(isPalindrome(0b1110)).toBe(false) // 1110 is not a palindrome
    expect(isPalindrome(0b100010)).toBe(false) // 100010 is not a palindrome
  })

  it('works with edge cases like 0', () => {
    expect(isPalindrome(0)).toBe(true) // 0 is considered a palindrome (all bits are 0)
  })

  it('works with larger numbers', () => {
    expect(isPalindrome(0b1000000000000000000000000000001)).toBe(true) // 1000000000000000000000000000001 is a palindrome
    expect(isPalindrome(0b1000000000000000000000000000010)).toBe(false) // Not a palindrome
  })

  it('returns true for a single bit set', () => {
    expect(isPalindrome(0b1)).toBe(true) // Single bit is trivially a palindrome
  })

  it('returns true for a number where all bits are the same', () => {
    expect(isPalindrome(0b111111)).toBe(true) // 111111 is a palindrome
    expect(isPalindrome(0b1111111111111111111111111111111)).toBe(true) // All bits set in 32-bit number is a palindrome
  })
})
