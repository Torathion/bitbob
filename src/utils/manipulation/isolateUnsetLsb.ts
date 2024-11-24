/**
 *  Isolates the least significant unset bit.
 *
 *  @param x - target number.
 *  @returns the isolated bit represented as a power of 2.
 */
export default function isolateUnsetLsb(x: number): number {
  return ~x & (x + 1)
}
