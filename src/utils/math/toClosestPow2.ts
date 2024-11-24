import toNextPow2 from './toNextPow2'

/**
 *  Calculates the closest power of 2 to a given number.
 *
 *  @param x - The input number. Must be a positive integer.
 *  @returns the power of 2 that is closest to `x`.
 */
export default function toClosestPow2(x: number): number {
  const next = toNextPow2(x)
  const prev = next >> 1
  return x - prev < next - x ? prev : next
}
