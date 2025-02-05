/**
 *  Loosely compares two integers by a given threshold.
 *
 *  @param x - first number to compare.
 *  @param y - second number to compare.
 *  @param threshold - the comparison threshold.
 *  @returns true, if both numbers loosely equal by the given threshold, otherwise false.
 */
export default function looseCompare(x: number, y: number, threshold: number): boolean {
  return !((x - y - threshold) & (y - x - threshold))
}
