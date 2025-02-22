/**
 *	Counts all set bits (1) of a given number. This is also called the "hamming weight".
 *
 *  @param x - target number.
 *  @returns the amount of set bits.
 */
export default function countSetBits(x: number): number {
  x -= (x >> 1) & 0x55555555
  x = (x & 0x33333333) + ((x >> 2) & 0x33333333)
  return (((x + (x >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24
}
