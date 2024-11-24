/**
 *  Toggles a bit at the given bit position of the given number.
 *
 *  @param x - target number.
 *  @param bit - bit position.
 *  @returns the modified number.
 */
export default function toggle(x: number, bit: number): number {
  return x ^ 1 << bit - 1
}
