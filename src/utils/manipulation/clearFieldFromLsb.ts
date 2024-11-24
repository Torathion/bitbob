/**
 *  Clears the field beginning from the least significant bit. It does not matter if the lsb is set or not.
 *
 *  @param x - target number
 *  @param fieldLength - size of the field
 *  @returns the number without the cleared field.
 */
export default function clearFieldFromLsb(x: number, fieldLength: number): number {
  return x & ~((1 << (fieldLength + 1)) - 1)
}
