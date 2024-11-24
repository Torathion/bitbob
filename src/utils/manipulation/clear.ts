/**
 * Clears (sets to 0) the bit at the given position in the number.
 *
 *  @param x - The number where the bit is to be cleared.
 *  @param bit - The position of the bit to clear (1-based index).
 *  @returns The new number with the specified bit cleared.
 */
export default function clear(x: number, bit: number): number {
  return x & ~(1 << bit - 1)
}
