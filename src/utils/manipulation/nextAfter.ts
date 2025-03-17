import { getHigh, getLow, toDouble } from '../helper'

const SMALLEST_DENORM = 2 ** -1074
const UINT_MAX = -1 >>> 0

/**
 *  Returns the next floating point number after any given number towards another floating point number.
 *
 * @param x - target number
 * @param to - bound number
 * @returns the next floating point number towards the bound number
 */
export default function nextAfter(x: number, to: number): number {
  if (isNaN(x) || isNaN(to)) return NaN
  if (x === to) return x
  if (x === 0) return to < 0 ? -SMALLEST_DENORM : SMALLEST_DENORM
  let hi = getHigh(x)
  let lo = getLow(x)
  if (to > x === x > 0) {
    if (lo === UINT_MAX) {
      hi += 1
      lo = 0
    } else lo += 1
  } else if (lo === 0) {
    lo = UINT_MAX
    hi -= 1
  } else lo -= 1
  return toDouble(lo, hi)
}
