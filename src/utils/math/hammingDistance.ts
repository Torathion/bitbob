import countSetBits from '../measurement/countSetBits'

/**
 *  Calculates the Hamming distance between two integers.
 *  The Hamming distance is the number of positions at which the corresponding bits are different.
 *
 *  @param x - The first integer to compare.
 *  @param y - The second integer to compare.
 *  @returns The Hamming distance between the two integers. This is the number of differing bit positions.
 */
export default function hammingDistance(x: number, y: number): number {
  return countSetBits(x ^ y)
}
