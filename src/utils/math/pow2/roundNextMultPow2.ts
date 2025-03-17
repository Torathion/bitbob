import { InverseLogSequence } from 'src/constants'

/**
 *  Rounds a given number to the next biggest multiple of the given power of 2.
 *
 *  @param x - target number.
 *  @param y - target power of 2.
 *  @returns the rounded number.
 */
export default function roundNextMultPow2(x: number, y: number): number {
  const shift = InverseLogSequence[(y * 0x04ad19df) >>> 27]
  return ((x >> shift) + 1) << shift
}
