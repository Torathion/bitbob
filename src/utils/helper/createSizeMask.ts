/**
 *  Creates a bit mask with an optional shift.
 *
 *  @param size - size of the mask, i.e 2 is 11 or 3 is 111
 *  @param shift - shift of the mask, i.e. 2 is 100 or 3 is 1000
 *  @returns the bit mask
 */
export default function createSizeMask(size: number, shift = 0): number {
  return ((2 << (size - 1)) - 1) << shift
}
