/**
 *  Counterpart algorithm of `lsb`, which instead searches for the least significant bit difference. The position is presented as a power of 2.
 *
 *  @param x - first number
 *  @param y - second number
 *  @returns the power of 2 of the position of the least significant bit difference.
 */
export default function diffLsb(x: number, y: number): number {
  return (x ^ y) & -(x ^ y)
}
