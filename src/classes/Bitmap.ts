import BitHandler from './BitHandler'

/**
 *   A data structure that represents a compact storage of up to 31 different
 *   boolean values by using the conversion of `0` for `false` and `1` for `true`.
 *
 *   It is recommended to use an `enum` for easier handling of this class.
 */
export default class Bitmap extends BitHandler {
  /**
   *  Applies a state as a mask to the bitmap.
   *
   *  @param mask - state to apply.
   */
  apply(mask: number): void {
    this._state |= mask
  }

  /**
   *  Clears a field of flags at once (0 counting).
   *
   *  @param start - starting bit position.
   *  @param end - ending bit position.
   */
  clearRange(start: number, end: number): void {
    this._state &= ~(((2 << (end - start - 1)) - 1) << start)
  }

  /**
   *  Flips the entire state.
   */
  flip(): void {
    this._state = ~this._state & ((1 << 31) - 1)
  }

  /**
   *  Flips a field of flags at once (0 counting).
   *
   *  @param start - starting bit position.
   *  @param end - ending bit position.
   */
  flipRange(start: number, end: number): void {
    this._state ^= ((1 << (end - start + 1)) - 1) << start
  }

  /**
   *  Extracts the bit value of the given bit position.
   *
   * @param bit - target bit position.
   * @returns Either `1` for a set state, otherwise `0`.
   */
  override get(bit: number): boolean {
    return !!((this._state >> (bit >> 1)) & 1)
  }

  /**
   *  Checks if a specific subset of a state is met.
   *
   *  This is an equivalent to checking multiple `AND` operations at once.
   *
   *  @param mask - subset condition
   *  @returns `true`, if the condition is met, otherwise `false`.
   */
  isMet(mask: number): boolean {
    return (this._state & mask) === mask
  }

  /**
   *  Checks if a specific flag (bit) is set.
   *  This also has the ability to check for multiple states at once, acting as an OR operation.
   *
   *  @param bit - the flag(s) to check.
   *  @returns `true`, if the condition is met, otherwise `false`.
   */
  override has(bit: number): boolean {
    return !!(this._state & bit)
  }

  /**
   *  Sets a specific flag from a bitmap state. It takes a power of 2 as an argument.
   *
   *  @param bit - the flag to set
   */
  set(bit: number): void {
    this._state |= bit
  }

  /**
   *  Sets a field of flags at once (0 counting).
   *
   *  @param start - starting bit position.
   *  @param end - ending bit position.
   */
  setRange(start: number, end: number): void {
    this._state |= ((2 << (end - start - 1)) - 1) << start
  }

  /**
   *  Returns the number of active states
   */
  get activeStates(): number {
    let count = 0
    let map = this._state
    while (map) {
      count++
      map &= map - 1 // Removes the lowest set bit
    }
    return count
  }

  /**
   *  Toggles a specific flag from a bitmap state. It takes a power of 2 as an argument.
   *
   *  @param bit - the flag to toggle
   */
  toggle(bit: number): void {
    this._state ^= bit
  }

  /**
   *  Unset a specific flag from a bitmap state. It takes a power of 2 as an argument.
   *
   *  @param bit - the flag to unset
   */
  unset(bit: number): void {
    this._state &= ~bit
  }
}
