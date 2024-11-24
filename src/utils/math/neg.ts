/**
 *  Computes the arithmetic negation of a given integer.
 *
 *  @param x - The number to negate.
 *  @returns the negation of `x`.
 */
export default function neg(x: number): number {
  return (x ^ -1) + 1
}
