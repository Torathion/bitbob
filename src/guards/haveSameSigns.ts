/**
 *  Guard function to check if two numbers have same signs.
 *
 *  @param x - first number to check.
 *  @param y - second number to check.
 *  @returns `true`, if both numbers have same signs, otherwise `false`.
 */
export default function haveSameSigns(x: number, y: number): boolean {
  return (x ^ y) >= 0
}
