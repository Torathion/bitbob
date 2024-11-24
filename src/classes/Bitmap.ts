/**
 *   A data structure that represents a compact storage of up to 31 different
 *   boolean values by using the conversion of `0` for `false` and `1` for `true`.
 *
 *   It is recommended to use an `enum` for easier handling of this class.
 */
export default class Bitmap {
  #map: number

  constructor(initialState = 0) {
    this.#map = initialState
  }

  /**
   *  Applies a state as a mask to the bitmap.
   *
   *  @param mask - state to apply.
   */
  apply(mask: number): void {
    this.#map |= mask
  }

  /**
   *  Clears the entire cached state
   */
  clear(): void {
    this.#map = 0
  }

  /**
   *  Flips the entire state
   */
  flip(): void {
    this.#map = ~this.#map & ((1 << 31) - 1)
  }

  /**
   *  Flips a field of flags at once (0 counting).
   *
   *  @param start - starting bit position
   *  @param end - ending bit position
   */
  flipRange(start: number, end: number): void {
    this.#map ^= ((1 << (end - start + 1)) - 1) << start
  }

  /**
   *  Checks if a specific subset of a state is met.
   *
   *  @param mask - subset condition
   *  @returns `true`, if the subset is met, otherwise `false`.
   */
  isMet(mask: number): boolean {
    return (this.#map & mask) === mask
  }

  /**
   *  Checks if a specific flag (bit) is set.
   *
   *  @param bit - the flag to check.
   *  @returns `true`, if the flag is set, otherwise `false`.
   */
  isSet(bit: number): boolean {
    return (this.#map & (1 << bit)) !== 0
  }

  /**
   *  Sets a specific flag
   *
   *  @param bit - the flag to set
   */
  set(bit: number): void {
    this.#map |= 1 << bit
  }

  /**
   *   Returns the current state of the map.
   */
  get state(): number {
    return this.#map
  }

  set state(newState: number) {
    this.#map = newState
  }

  /**
   *  Returns the number of active states
   */
  get activeStates(): number {
    let count = 0
    let map = this.#map
    while (map) {
      count++
      map &= map - 1 // Removes the lowest set bit
    }
    return count
  }

  /**
   *  Toggles a specific flag
   *
   *  @param bit - the flag to toggle
   */
  toggle(bit: number): void {
    this.#map ^= 1 << bit
  }

  /**
   *  Unset a specific flag
   *
   *  @param bit - the flag to unset
   */
  unset(bit: number): void {
    this.#map &= ~(1 << bit)
  }
}
