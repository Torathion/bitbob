import { getHigh, getLow } from '../helper/doubleView'

/**
 *  Returns the fractional part of a given double precision 32-bit unsigned number.
 *
 *  @param n - the target number.
 *  @returns the fractional part of the given number as a pair of numbers ([low, high]), where low is a 32 bit integer and his is a 21 bit integer.
 */
export default function doubleFrac(n: number): [number, number] {
  const hi = getHigh(n)
  let b = hi & ((1 << 20) - 1)
  if (hi & 0x7ff00000) b += 1 << 20
  return [getLow(n), b]
}
