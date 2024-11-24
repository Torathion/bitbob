/**
 *  Clears the field beginning from the most significant bit.
 *
 *  @param x - target number
 *  @param fieldLength - size of the field
 *  @returns the number without the cleared field.
 */
export default function clearFieldFromMsb(x: number, i: number): number {
  return x & ((1 << i) - 1)
}
