import { getHigh } from '../helper/doubleView'

/**
 *	Calculates the sign of a double precision unsigned 32-bit number.
 *
 *  @param n - the target number.
 *  @returns the sign of the given number.
 */
export default function doubleSign(n: number): number {
    return getHigh(n) >>> 31
}
