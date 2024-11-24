/**
 *  Sets the least significant unset bit.
 *
 *  @param x - The input number.
 *  @returns A new number with the least significant unset bit set.
 */
export default function setLeast(x: number): number {
  return x | x + 1
}
