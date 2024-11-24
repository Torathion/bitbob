/**
 *  Rounds the number to the next lowest number.
 *
 * @param x - the number to round.
 * @returns the rounded number.
 */
export default function floor(x: number): number {
  return x | 0
}
