import { unsignedMod } from '../math'

/**
 *  Rotates the bits of an unsigned integer `n` to the right by `d` positions.
 *
 *  @param x - The number to rotate.
 *  @param shift - The number of positions to rotate to the right.
 *  @param size - The bit width of the number (default is 31).
 *  @returns the number after the right rotation.
 */
export default function rotateRight(x: number, shift: number, size = 31): number {
  shift = unsignedMod(shift, size)
  return ((x >>> shift) | (x << (size - shift))) & ((1 << size) - 1)
}
