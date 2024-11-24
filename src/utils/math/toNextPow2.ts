/**
 *  Calculates the next power of 2 greater than or equal to the given number.
 *
 *  @param x - The input number. Must be a positive integer.
 *  @returns the next power of 2 greater than or equal to `x`.
 */
export default function toNextPow2(x: number): number {
  x += +!x
  --x
  x |= x >>> 1
  x |= x >>> 2
  x |= x >>> 4
  x |= x >>> 8
  x |= x >>> 16
  return x + 1
}
