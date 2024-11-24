/**
 *  Clears the least significant set bit (1) in a number.
 *
 *  @param x - The number from which the least significant set bit will be cleared.
 *  @returns The modified number with the least significant set bit cleared.
 */
export default function clearLsb(x: number): number {
  return x & (x - 1)
}
