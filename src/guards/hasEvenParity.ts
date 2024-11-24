/**
 *  Determines if the given number has an even parity.
 *
 *  @param x - target number.
 *  @returns `true` if the number has an even parity, otherwise false.
 */
export default function hasEvenParity(x: number): boolean {
  let par = 0
  x >>>= 0
  while (x) {
    par = ~par
    x &= x - 1
  }
  return !par
}
