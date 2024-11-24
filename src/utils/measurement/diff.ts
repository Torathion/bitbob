/**
 *  Counts the number of different bits between the both given integers.
 *
 *  @param x - first number.
 *  @param y - second number.
 *  @returns count of different bits.
 */
export default function diff(x: number, y: number): number {
  let count = 0
  let diff = (x ^ y) >>> 0
  while (diff) {
    count += diff & 1
    diff >>>= 1
  }
  return count
}
