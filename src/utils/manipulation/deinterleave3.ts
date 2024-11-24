/**
 *  Extracts the nth interleaved 10-bit component from a 32-bit 3 component interleaved number.
 *
 *  @param x - The target number
 *  @param n - Starting position (first, second or third component)
 *  @returns The nth interleaved component.
 */
export default function deinterleave3(x: number, n: number): number {
  x = (x >>> n) & 1227133513
  x = (x | (x >>> 2)) & 3272356035
  x = (x | (x >>> 4)) & 251719695
  x = (x | (x >>> 8)) & 4278190335
  x = (x | (x >>> 16)) & 0x3ff
  return x & 0x3ff
}
