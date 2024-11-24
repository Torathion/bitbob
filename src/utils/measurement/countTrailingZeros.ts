/**
 *  Counts the number of trailing zero of a number.
 *
 *  @param x - target number.
 *  @returns number of trailing zeros.
 */
export default function countTrailingZeros(x: number): number {
  let c = 32
  x &= -x
  if (x) c--
  if (x & 0x0000ffff) c -= 16
  if (x & 0x00ff00ff) c -= 8
  if (x & 0x0f0f0f0f) c -= 4
  if (x & 0x33333333) c -= 2
  if (x & 0x55555555) c -= 1
  return c
}
