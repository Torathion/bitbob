/**
 *  Determines if a given number is a power of 2.
 *
 *  @param x - target number.
 *  @returns `true`, if the number is a power of 2, otherwise `false`.
 */
export default function isPow2(x: number): boolean {
  return !!x && !(x & x - 1)
}
