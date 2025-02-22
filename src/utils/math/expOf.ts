import { getHigh } from '../helper/doubleView'

/**
 *	Calculates the exponent of a double precision unsigned 32-bit integer.
 *
 *  @param n - the target number.
 *  @returns the exponent of the given number.
 */
export default function expOf(n: number): number {
  return ((getHigh(n) << 1) >>> 21) - 1023
}
