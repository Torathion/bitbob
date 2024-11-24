/**
 *  Wraps the given number to a signed number in the bit range of power 2.
 *
 *  @param x - target number.
 *  @param bitLimit - power of 2 bit limit.
 *  @returns the wrapped number.
 */
export default function wrap(x: number, bitLimit: number): number {
  x &= (1 << bitLimit) - 1 // Limit to the bit range
  // Test at half way point
  return x >= 1 << (bitLimit - 1) ? x - (1 << bitLimit) : x
}
