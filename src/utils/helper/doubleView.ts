const doubleView = new Float64Array(1)
const uintView = new Uint32Array(doubleView.buffer)
doubleView[0] = 1

/**
 *  Converts the lower and higher order bits to a 32-bit unsigned double precision number.
 *
 *  @param low - the low bits of a number
 *  @param high - the high bits of a number
 *  @returns the combined 32-bit unsigned double precision number.
 */
export function toDouble(low: number, high: number): number {
  uintView[0] = low
  uintView[1] = high
  return doubleView[0]
}

/**
 *  Gets the lower order bits of the given IEEE 754 double precision number.
 *
 *  @param n - the target number.
 *  @returns the low bits of the given number.
 */
export function getLow(n: number): number {
  doubleView[0] = n
  return uintView[0]
}

/**
 *  Gets the higher order bits of the given IEEE 754 double precision number.
 *
 *  @param n - the target number.
 *  @returns the high bits of the given number.
 */
export function getHigh(n: number): number {
  doubleView[0] = n
  return uintView[1]
}
