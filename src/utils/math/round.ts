/**
 *  Rounds a given number to the nearest integer.
 *
 *  @param x - The number to round.
 *  @returns the rounded integer value of `x`.
 */
export default function round(x: number): number {
  const frac = x - (x | 0) + 0
  return (x + frac + (frac !== 0 ? 0.1 : 0)) | 0
}
