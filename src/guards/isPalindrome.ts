/**
 *  Determines if the bit sequence of a given number is a palindrome. (010, 101, 0110, 1001, ...)
 *
 *  @param x - target number.
 *  @returns `true`, if the sequence is a palindrome, otherwise `false`.
 */
export default function isPalindrome(x: number): boolean {
  let rev = 0
  let temp = x
  while (temp > 0) {
    rev = rev << 1 | temp & 1
    temp >>= 1
  }
  return rev === x
}
