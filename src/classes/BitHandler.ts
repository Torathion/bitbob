/**
 *  Templating class to create unified bit sequence handlers.
 */
export default abstract class BitHandler {
  /**
   *  Internal bit sequence.
   */
  protected _state: number

  constructor(state = 0) {
    this._state = state
  }

  /**
   *  Sets a specific value in the bit sequence.
   *
   * @param value - value / position to set.
   */
  abstract set(value: number): void
  /**
   *  Extracts a specific value in a primitive type from the bit sequence.
   *
   * @param value position to get.
   */
  abstract get(value: number): number | boolean
  /**
   *  Checks if a specific value is met.
   *
   * @param value - value / position to check for.
   */
  abstract has(value: number): void
  /**
   *  Clears the entire state.
   */
  clear(): void {
    this._state = 0
  }

  /**
   *   Returns the current state of the map.
   */
  get state(): number {
    return this._state
  }

  /**
   *  Replaces the state with a completely new one.
   */
  set state(value: number) {
    this._state = value
  }

  /**
   *  Converts the bit handler to a json-viable string.
   *
   *  @returns a json-viables string in form of the current inner state.
   */
  toJSON(): string {
    return `{ state: ${this._state} }`
  }
}
