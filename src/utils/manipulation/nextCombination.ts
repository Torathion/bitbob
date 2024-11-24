import countTrailingZeros from '../measurement/countTrailingZeros'

/**
 *	Computes the next bit combination in colexicographic order
 *
 *  @param x - target number
 *  @returns the next bit combination in colexicographic order
 */
export default function nextCombination(x: number): number {
  if (!x) return 1
  const t = x | x - 1
  return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(x) + 1
}
