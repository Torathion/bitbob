/**
 *  Guard function to check if two numbers have different signs.
 *
 *  @param x - first number to check.
 *  @param y - second number to check.
 *  @returns `true`, if both numbers have different signs, otherwise `false`.
 */
export default function haveOppositeSigns(x: number, y: number): boolean {
  return (x ^ y) < 0
}
