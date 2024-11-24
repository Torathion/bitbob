/**
 *  Computes the maximum of the two given integers.
 *
 *  @param x - the first number to compare.
 *  @param y - the second number to compare.
 *  @returns the maximum of both integers.
 */
export default function max(x: number, y: number): number {
  return x ^ (x ^ y) & -(x < y)
}
