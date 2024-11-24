import createSizeMask from 'src/utils/helper/createSizeMask'

/**
 *  Determines if a specific field is all set.
 *
 *  @param x - target number.
 *  @param size - size of the field.
 *  @param shift - position of the field.
 *  @returns `true`, if every bit of the field is set, otherwise `false`.
 */
export default function isFieldSet(x: number, size: number, shift = 0): boolean {
  const mask = createSizeMask(size, shift)
  return (x & mask) === mask
}
