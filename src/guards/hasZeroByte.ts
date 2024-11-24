/**
 *  Checks if a given 32bit integer has a zero byte in any of its 32 bits.
 *
 *  @param x - target number
 *  @returns `true` if it has a zero byte, otherwise `false`.
 */
export default function hasZeroByte(x: number): boolean {
  return !!((x - 0x01010101) & ~x & 0x80808080)
}
