import createSizeMask from '../helper/createSizeMask'

/**
 *  Sets a group of bits, or "field," in a target number to the value of another number.
 *
 *  @param x - The target number where the field will be set.
 *  @param y - The value to set in the field.
 *  @param size - The size of the field (number of bits).
 *  @param shift - The starting position of the field (from the right). Default is `0`.
 *  @param mask - Optional bitmask to specify the field location.
 *  @returns The modified number with the specified field set to `y`.
 */
export default function setField(x: number, y: number, size: number, shift = 0, mask?: number): number {
  return x & ~(mask ?? createSizeMask(size, shift)) | y << shift
}
