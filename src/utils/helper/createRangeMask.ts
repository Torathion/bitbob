/**
 *  Creates a mask beginning from a starting index to an end index (0 counting).
 *
 *  @param start - start index.
 *  @param end - end index.
 *  @returns the resulting bit mask.
 */
export default function createRangeMask(start: number, end: number): number {
  return (1 << end - start + 1) - 1 << start
}
