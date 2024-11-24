import sign from './sign'

/**
 *  Rounds a given number to the nearest integer.
 *
 *  @param x - The number to round.
 *  @returns the rounded integer value of `x`.
 */
export default function round(x: number): number {
  return (x + 0.5 * sign(x)) >> 0
}
