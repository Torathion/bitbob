/**
 *  Finds the missing number in a linear integer number sequence.
 *
 *  @param array - number sequence.
 *  @returns the missing number of the sequence.
 */
export default function findMissingInSequence(array: ArrayLike<number> | number[]): number {
  const length = array.length
  let xorAll = 0
  let xorArr = 0
  let i: number
  for (i = 0; i < length; i++) {
    xorArr ^= array[i]
    xorAll ^= i
  }
  return xorArr ^ xorAll ^ length
}
