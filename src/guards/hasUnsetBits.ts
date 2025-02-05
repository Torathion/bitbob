/**
 *  Determines if a number has unset bits in the sequence.
 *
 *  @param x - target number.
 *  @returns `true`, if the number has unset bits, otherwise `false`.
 */
export default function hasUnsetBits(x: number): boolean {
  x >>>= 0
  return !x || !!(x & (x + 1))
}
