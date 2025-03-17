import { ILog2Sequence } from 'src/constants'

/**
 *  Computes the inverse logarithm base 2 of the given number. This number already has to be a power of 2.
 *
 *  For arbitrary numbers, use `countTrailingZeros` instead.
 *
 *  @param x - The input number to compute the inverse log2 for. Must be a positive integer.
 *  @returns The approximate inverse log2 value from the precomputed sequence.
 */
export default function iLogPow2(x: number): number {
  return ILog2Sequence[(x * 0x04ad19df) >>> 27]
}
