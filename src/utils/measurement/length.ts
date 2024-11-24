import { intLog2, min } from '../math'

/**
 *  Calculates the bit length of a given number.
 *
 *  @param x - the target number.
 *  @returns the bit length of the given number.
 */
export default function length(x: number): number {
  if (x >= 0) return (intLog2(x) + 1) >> 0
  let len = 0
  while (x !== -1) {
    x >>= 1
    len++
  }
  return min(len + 1, 31)
}
