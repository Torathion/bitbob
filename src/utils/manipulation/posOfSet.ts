/**
 *  Identifies the position of the ONLY set bit in the entire number.
 *
 *  @param n - target number.
 *  @returns the position of the only set bit, or 1, if there are multiple set bits.
 */
export default function posOfSet(n: number): number {
  // unset lsb and check if non-zero
  if (n & (n - 1)) return 1
  let pos = 0
  while (n) {
    n >>= 1
    pos++
  }
  return pos
}
