/**
 *  Propagates the rightmost set bit of a number to the right, filling all bits to the right of that bit with 1.
 *
 *  @param x - target number.
 *  @returns the propagated number, usually a power of 2.
 */
export default function rightPropagate(x: number): number {
  return (x === 0 ? 1 : x | (x - 1)) >>> 0
}
