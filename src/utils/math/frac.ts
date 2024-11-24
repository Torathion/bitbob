/**
 *	Calculates the fraction of the given number. Some fractions may result in rounding issues due to the floating point issue.
 *
 *	@public
 * 	@param n - target number
 * 	@returns the fraction of the given number
 */
export default function frac(n: number): number {
  return n - (n | 0) + 0
}
