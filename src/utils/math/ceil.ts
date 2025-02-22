/**
 *  Rounds the given number to the next highest.
 *
 *  @param x - the number to round.
 *  @returns the rounded number.
 */
export default function ceil(x: number): number {
  return (x | 0) === x ? x : (x + (x > 0 ? 1 : 0)) >> 0
}
