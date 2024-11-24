import length from './length'

/**
 *  Finds a number inside a number.
 *
 *  @param from - source number.
 *  @param x - target number.
 *  @returns the index of the bit position, otherwise `-1`, if not found.
 */
export default function find(from: number, x: number): number {
  if (from === x) return 1
  const xLen = length(x)
  const mainLen = length(from) - xLen
  const mask = (1 << xLen) - 1
  for (let i = 0; i <= mainLen; i++) if (((from >> i) & mask) === x) return i + 1
  return -1
}
