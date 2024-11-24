/**
 *  Swaps adjacent bits in a number. For each pair of bits, the left bit is moved to the right and the right bit is moved to the left.
 *
 *  @param x - The input number.
 *  @returns A new number with all adjacent bits swapped.
 */
export default function swapAdjacent(x: number): number {
  return (x & 0b10101010) >> 1 | (x & 0b01010101) << 1
}
