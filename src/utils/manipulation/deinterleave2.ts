/**
 *  Extracts the nth interleaved 16-bit component from a 32-bit 2 component interleaved number.
 *
 *  @param x - The target number
 *  @param n - Starting position (first or second component)
 *  @returns The nth interleaved component.
 */
export default function deinterleave2(x: number, n: number): number {
  x = (x >>> n) & 0x55555555
  x = (x | (x >>> 1)) & 0x33333333
  x = (x | (x >>> 2)) & 0x0f0f0f0f
  x = (x | (x >>> 4)) & 0x00ff00ff
  x = (x | (x >>> 8)) & 0x0000ffff
  return x >>> 0
}
