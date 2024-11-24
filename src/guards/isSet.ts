/**
 *  Guard function to check if a specific bit of a given number is set or not.
 *
 *  @param x - the target number.
 *  @param bit - the bit to check.
 *  @returns `true`, if the specified bit is set, otherwise `false`.
 */
export default function isSet(x: number, bit: number): boolean {
  return (x & (1 << bit)) !== 0
}
