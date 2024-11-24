/**
 *  Interleaves the lower 16 bits of a 32 bit integer with `0`.
 *
 *  @param x - target number.
 *  @returns the interwoven 32 bit integer of `x` and `0`.
 */
export default function interleave1(x: number): number {
  x = (x ^ (x << 16)) & 0x0000ffff
  x = (x ^ (x << 8)) & 0x00ff00ff
  x = (x ^ (x << 4)) & 0x0f0f0f0f
  x = (x ^ (x << 2)) & 0x33333333
  x = (x ^ (x << 1)) & 0x55555555
  return x >>> 0
}
