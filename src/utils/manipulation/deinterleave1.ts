/**
 *  Deinterleaves a 32 bit number interleaved with 0.
 *
 *  @param x - the interleaved number.
 *  @returns the deinterleaved number.
 */
export default function deinterleave1(x: number): number {
  x &= 0x55555555 >>> 0
  x = (x | (x >> 1)) & 0x33333333
  x = (x | (x >> 2)) & 0x0f0f0f0f
  x = (x | (x >> 4)) & 0x00ff00ff
  x = (x | (x >> 8)) & 0x0000ffff

  return x
}
