/**
 *  Computes the parity of a given number.
 *
 *  @param x - target number.
 *  @returns the parity of the number.
 */
export default function parity(x: number): number {
  x ^= x >>> 16
  x ^= x >>> 8
  x ^= x >>> 4
  return 0x6996 >>> (x & 0xf) & 1
}
