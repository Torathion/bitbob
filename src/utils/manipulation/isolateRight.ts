/**
 *  Isolates the right part of a bit sequence, starting from a given bit.
 *
 *  @param x - target number.
 *  @param bit - start position.
 *  @returns the isolated field.
 */
export default function isolateRight(x: number, bit: number): number {
  return x & (1 << bit) - 1
}
