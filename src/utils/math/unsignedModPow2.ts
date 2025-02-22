import { isPow2 } from 'src/guards'

/**
 *  Computes the unsigned remainder of a number `x` divided by a power of 2. It's a mix of `unsignedMod` and `modPow2`
 *
 *  @param x - The dividend, a number to be divided.
 *  @param power - A power of 2 to be used as the divisor.
 *  @returns the remainder when `x` is divided by `power`, or -1 if the number is not a power of 2
 */
export default function unsignedModPow2(x: number, power: number): number {
  return isPow2(power) ? ((x & (power - 1)) + power) & (power - 1) : -1
}
