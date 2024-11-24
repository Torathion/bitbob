/**
 *	Computes the inverse sign of the given integer.
 *
 *  @param x - target integer
 *  @returns the inverse sign of the given integer.
 */
export default function aSign(x: number): number {
  return +(x < 0) - +(x > 0)
}
