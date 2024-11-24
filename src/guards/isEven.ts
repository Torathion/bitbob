/**
 *  Guard function to check if a number is even.
 *
 *  @param x - number to check.
 *  @returns `true`, if the number is even, otherwise `false`.
 */
export default function isEven(x: number): boolean {
  return !(x & 1)
}
