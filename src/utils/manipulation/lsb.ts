/**
 *  Returns the least significant bit of a number as a number.
 *
 *  @param x - target number.
 *  @returns - the least significant bit as a number.
 */
export default function lsb(x: number): number {
  return x & -x
}
