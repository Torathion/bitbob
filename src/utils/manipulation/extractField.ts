import createSizeMask from '../helper/createSizeMask'

/**
 *  Extracts a group of bits, also called "field", from the bit number.
 *
 *  @param n - target number
 *  @param size - size of the field
 *  @param shift - start position of the field (from right)
 *  @param mask - optional mask, if the mask already exists.
 *  @returns the extracted field.
 */
export default function extractField(n: number, size: number, shift = 0, mask?: number): number {
  const bitmask = mask ?? createSizeMask(size, shift)
  return shift < 32 ? (n & 0xffffffff & bitmask) >>> shift : ((n >>> 32) & 0xffffffff & bitmask) >>> (shift - 32)
}
