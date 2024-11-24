/**
 *  Counts all trailing set bits in a bit sequence.
 *
 *  @param x - target number.
 *  @returns amount of trailing set bits.
 */
export default function countTrailingOnes(x: number): number {
  let count = 0
  while (x > 0 && (x & 1) === 1) {
    count++
    x >>= 1
  }
  return count
}
