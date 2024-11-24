/**
 *  Calculates the logarithm of a given integer.
 *
 *  @param x - the given integer.
 *  @returns the logarithm base 10 of the given number.
 */
export default function intLog10(x: number): number {
  if (x < 0) return NaN
  return x >= 1000000000
    ? 9
    : x >= 100000000
    ? 8
    : x >= 10000000
    ? 7
    : x >= 1000000
    ? 6
    : x >= 100000
    ? 5
    : x >= 10000
    ? 4
    : x >= 1000
    ? 3
    : x >= 100
    ? 2
    : x >= 10
    ? 1
    : 0
}
