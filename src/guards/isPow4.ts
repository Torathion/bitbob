/**
 *  Determines if a given number is a power of 4.
 *
 *  @param x - target number.
 *  @returns `true`, if the number is a power of 4, otherwise `false`.
 */
export default function isPow4(x: number): boolean {
  return !!x && !(x & x - 1) && !!(x & 0x55555555)
}
