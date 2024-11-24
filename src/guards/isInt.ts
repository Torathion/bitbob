/**
 *  Checks if a given number is a 32 bit integer.
 *
 *  @param x - target number
 *  @returns `true`, if the number is a 32 bit integer, otherwise `false`.
 */
export default function isInt(x: number): boolean {
  return (x | 0) === x
}
