/**
 * Interleaves the lower 10 bits of three integers.
 *
 *  @param x - The first number.
 *  @param y - The second number.
 *  @param z - The third number.
 *  @returns A 32-bit integer with bits interwoven from of the lower 19 bits of `x`, `y` and `z`.
 */
export default function interleave3(x: number, y: number, z: number): number {
  x &= 0x3ff
  x = (x | (x << 16)) & 4278190335
  x = (x | (x << 8)) & 251719695
  x = (x | (x << 4)) & 3272356035
  x = (x | (x << 2)) & 1227133513

  y &= 0x3ff
  y = (y | (y << 16)) & 4278190335
  y = (y | (y << 8)) & 251719695
  y = (y | (y << 4)) & 3272356035
  y = (y | (y << 2)) & 1227133513
  x |= y << 1

  z &= 0x3ff
  z = (z | (z << 16)) & 4278190335
  z = (z | (z << 8)) & 251719695
  z = (z | (z << 4)) & 3272356035
  z = (z | (z << 2)) & 1227133513

  return (x | (y << 1) | (z << 2)) >>> 0
}
