/**
 *  Sets a given bit of a given number.
 *
 *  @param x - target number.
 *  @param bit - bit position to set.
 *  @returns the modified number.
 */
export default function set(x: number, bit: number): number {
  return x | (1 << bit)
}
