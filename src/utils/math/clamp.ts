/**
 *  Clamps the given integer between a given minimum and maximum integer.
 *
 *  @param x - target integer.
 *  @param minX - the minimum integer.
 *  @param maxX - the maximum integer.
 *  @returns the clamped integer.
 */
export default function clamp(x: number, minX: number, maxX: number): number {
  const max = x ^ (x ^ minX) & -+(x < minX)
  return maxX ^ (max ^ maxX) & -+(max < maxX)
}
