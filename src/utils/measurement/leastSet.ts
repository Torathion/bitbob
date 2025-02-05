/**
 *  Finds the position of the least set significant bit.
 *
 *  @param n - target number.
 *  @returns bit position of the least set significant bit.
 */
export default function leastSet(n: number): number {
  if (n & 1) return 1
  // unset lsb and xor with the number itself
  n ^= n & (n - 1)
  let pos = 0
  while (n) {
    n >>= 1
    pos++
  }
  return pos
}
