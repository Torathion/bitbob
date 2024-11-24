/**
 *  Determines the bit state of a certain position of the target number.
 *
 *  @param x - target number.
 *  @param bit - bit to search for.
 *  @returns the state of the target bit. Returns 0 for out of range bit.
 */
export default function get(x: number, bit: number): number {
  return x >> bit & 1
}
