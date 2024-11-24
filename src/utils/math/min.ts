/**
 *  Computes the minimum of the two given integers.
 *
 *  @param x - the first number to compare.
 *  @param y - the second number to compare.
 *  @returns the minimum of both integers.
 */
export default function min(x: number, y: number): number {
  return y ^ (x ^ y) & -(x < y)
}
