/**
 *  Calculates the number of the common least significant set bit of two numbers.
 *
 *  @param x - first number.
 *  @param y - second number.
 *  @returns 2^x the position of the lsb
 */
export default function commonLsb(x: number, y: number): number {
  return x & y & -(x & y)
}
