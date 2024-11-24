/**
 *  Adds two numbers.
 *
 *  @param x - first number.
 *  @param y - second number.
 *  @returns the sum of both numbers.
 */
export function add(x: number, y: number): number {
  return x + y
}

/**
 *  AND combines two numbers.
 *
 *  @param x - first number.
 *  @param y - second number.
 *  @returns the AND combined number.
 */
export function and(x: number, y: number): number {
  return x & y
}

/**
 *  Divides two numbers.
 *
 *  @param x - target number.
 *  @param y - divisor.
 *  @returns the quotient of both number.
 */
export function div(x: number, y: number): number {
  return x / y
}

/**
 *  Determines the identity of the number.
 *
 *  @param x - the target number.
 *  @returns the same number.
 */
export function identity(x: number): number {
  return x
}

/**
 *  Shifts the number to the left by a given shift.
 *
 *  @param x - target number.
 *  @param shift - number of positions to shift left.
 *  @returns the left shifted number.
 */
export function leftShift(x: number, shift: number): number {
  return x << shift
}

/**
 *  Takes the modulo of the both numbers.
 *
 *  @param x - target number.
 *  @param y - modulator.
 *  @returns the result of this operation.
 */
export function mod(x: number, y: number): number {
  return x % y
}

/**
 *  Multiplies two numbers.
 *
 *  @param x - first number.
 *  @param y - second number.
 *  @returns the product of both numbers.
 */
export function mult(x: number, y: number): number {
  return x * y
}

/**
 *  Negates a number.
 *
 *  @param x - target number
 *  @returns the negated number.
 */
export function not(x: number): number {
  return ~x
}

/**
 *  OR combines two numbers.
 *
 *  @param x - first number.
 *  @param y - second number.
 *  @returns the OR combined number.
 */
export function or(x: number, y: number): number {
  return x | y
}

/**
 *  Calculates the power of two numbers.
 *
 *  @param x - target number.
 *  @param y - power.
 *  @returns the result of this operation.
 */
export function pow(x: number, y: number): number {
  return x ** y
}

/**
 *  Shifts a number to the right by the given shift.
 *
 *  @param x - target number.
 *  @param shift - positions to the right to shift to.
 *  @returns the right shifted number.
 */
export function rightShift(x: number, shift: number): number {
  return x >> shift
}

/**
 *  Converts an unsigned 32 bit integer to a signed 32 bit integer.
 *
 *  @param x - target number.
 *  @returns the unsigned 32 bit integer presentation
 */
export function signed(x: number): number {
  return x << 0 >> 0
}

/**
 *  Converts the number into an unsigned 32 bit integer.
 *
 *  @param x - target number.
 *  @returns the unsigned 32 bit integer representation of this number.
 */
export function unsigned(x: number): number {
  return x >>> 0
}

/**
 *  XOR combines two numbers.
 *
 *  @param x - first number.
 *  @param y - second number.
 *  @returns the XOR combined number.
 */
export function xor(x: number, y: number): number {
  return x ^ y
}
