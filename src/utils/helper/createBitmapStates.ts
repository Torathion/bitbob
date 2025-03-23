/**
 *  Creates a state LUT (lookup table) for the `Bitmap` class to manage state.
 *
 * @param keys - names of each state.
 * @returns the generated lookup table.
 */
export default function createBitmapStates<T extends string>(keys: readonly T[]): Record<T, number> {
  const states = {} as Record<T, number>
  for (let i = 0, len = keys.length; i < len; i++) {
    states[keys[i]] = 1 << i
  }
  return states
}
