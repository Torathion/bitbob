import { createSizeMask } from '../helper'

/**
 *  Clears a group of bits, or "field," in a target number.
 *
 *  @param x - The target number where the field will be cleared.
 *  @param size - The size of the field (number of bits).
 *  @param shift - The starting position of the field (from the right). Default is `0`.
 *  @param mask - Optional bitmask to specify the field location.
 *  @returns The modified number with the specified field cleared (set to `0`).
 */
export default function clearField(x: number, size: number, shift = 0, mask?: number): number {
  return x & ~(mask ?? createSizeMask(size, shift))
}
