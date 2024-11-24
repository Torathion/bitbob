/**
 *  Determines the most significant bit of a number as a number.
 *
 *  @param x - target number.
 *  @returns - the most significant bit field as a number.
 */
export default function msb(x: number): number {
  x |= x >> 1
  x |= x >> 2
  x |= x >> 4
  x |= x >> 8
  x |= x >> 16
  return x & ~(x >> 1)
}
