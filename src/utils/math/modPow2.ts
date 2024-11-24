import { isPow2 } from 'src/guards'

/**
 * Computes the remainder of a number `x` divided by a power of 2.
 *
 *  This function is optimized for cases where the divisor is a power of 2,
 *  leveraging bitwise operations for efficiency.
 *
 *  @param x - The dividend, a number to be divided.
 *  @param power - A power of 2 to be used as the divisor.
 *  @returns the remainder when `x` is divided by `power`, or -1 if the number is not a power of 2
 */
export default function modPow2(x: number, power: number): number {
  return isPow2(power) ? x & (power - 1) : -1
}
