/**
 *  Determines the sign of a given number.
 *
 *  The function returns:
 *  - `1` if the input `x` is positive.
 *  - `-1` if the input `x` is negative.
 *  - `0` if the input `x` is zero.
 *
 *  @param x - The number whose sign is to be determined.
 *  @returns `1`, `-1`, or `0` based on the sign of `x`.
 */
export default function sign(x: number): number {
  return +(x > 0) - +(x < 0)
}
