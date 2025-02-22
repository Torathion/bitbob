/**
 *  Determines if a given number is sparse or not.
 *
 *  @param x - target number.
 *  @returns `true`, if the number is sparse, otherwise `false`
 */
export default function isSparse(x: number): boolean {
  return !(x & (x >> 1))
}
