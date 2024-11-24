/**
 *  Combines to 16 bit numbers into an unsigned 32 bit number.
 *
 *  @param low - low bits of the number.
 *  @param high - high bits of the number.
 *  @returns the unsigned 32 bit combination.
 */
export default function combine(low: number, high: number): number {
  return ((high << 16) | (low & 0xffff)) >>> 0
}
