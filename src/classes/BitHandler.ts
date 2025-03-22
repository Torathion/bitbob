export default abstract class BitHandler {
  protected _state: number

  constructor(state = 0) {
    this._state = state
  }

  abstract set(value: number): void
  abstract get(value: number): number | boolean
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
