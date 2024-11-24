/**
 * Interleaves the lower 16 bits of two integers.
 *
 *  @param x - The first number.
 *  @param y - The second number.
 *  @returns A 32-bit integer with bits interwoven from of the lower 16 bits of `x` and `y`.
 */
export default function interleave2(x: number, y: number): number {
  x &= 0xffff
  y &= 0xffff

  x = (x | (x << 8)) & 0x00ff00ff
  x = (x | (x << 4)) & 0x0f0f0f0f
  x = (x | (x << 2)) & 0x33333333
  x = (x | (x << 1)) & 0x55555555

  y = (y | (y << 8)) & 0x00ff00ff
  y = (y | (y << 4)) & 0x0f0f0f0f
  y = (y | (y << 2)) & 0x33333333
  y = (y | (y << 1)) & 0x55555555
  return (x | (y << 1)) >>> 0 // Ensure a 32-bit result
}
