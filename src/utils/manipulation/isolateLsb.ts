/**
 *  Isolates the least significant set bit.
 *
 *  @param x - target number.
 *  @returns the isolated bit represented as a power of 2.
 */
export default function isolateLsb(x: number): number {
  return x & -x
}
