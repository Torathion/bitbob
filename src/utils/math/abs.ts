/**
 *	Computes the absolute value of the given integer.
 *
 *  @param x - target number
 *  @returns the absolute value of the integer.
 */
export default function abs(x: number): number {
  const mask = x >> 31
  return (x ^ mask) - mask
}
