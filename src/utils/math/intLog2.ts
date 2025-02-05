/**
 *  Calculates the logarithm of a given integer. Passing float numbers won't work.
 *
 *  @param x - the given integer.
 *  @returns the logarithm base 2 of the given number.
 */
export default function intLog2(x: number): number {
  if (x < 0) return NaN
  let r: number, shift: number
  r = +(x > 0xffff) << 4
  x >>>= r
  shift = +(x > 0xff) << 3
  x >>>= shift
  r |= shift
  shift = +(x > 0xf) << 2
  x >>>= shift
  r |= shift
  shift = +(x > 0x3) << 1
  x >>>= shift
  r |= shift
  return r | (x >> 1)
}
