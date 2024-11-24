import { getHigh } from '../utils/helper/doubleView'

/**
 *	Checks whether the given number is [denormalized](https://en.wikipedia.org/wiki/Subnormal_number)
 *
 *  @param n - the target number
 *  @returns `true`, if the number is denormalized, otherwise `false`.
 */
export default function isDenormalized(n: number): boolean {
  return !(getHigh(n) & 0x7ff00000)
}
