/**
 *  Wraps the given number to an unsigned number in the bit range of power 2.
 *
 *  @param x - target number.
 *  @param bitLimit - power of 2 bit limit.
 *  @returns the wrapped number.
 */
export default function unsignedWrap(x: number, bitLimit: number): number {
  const mask = (1 << bitLimit) - 1
  // Range check
  return -x > mask && x >>> 0 > mask ? (x & mask) + mask + 1 : x & mask
}
