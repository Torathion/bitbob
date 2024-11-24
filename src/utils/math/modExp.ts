/**
 *  Implementation of the [Fast Modular Exponentiation](https://en.wikipedia.org/wiki/Modular_exponentiation) algorithm.
 *
 *  The algorithm is especially useful, as too big numbers in `Math.pow(x, y)` would result in NaN.
 *
 *  @param x - base
 *  @param y - exponent
 *  @param mod - modular
 *  @returns the result of this equation.
 */
export default function modExp(x: number, y: number, mod: number): number {
  let result = 1
  x %= mod
  while (y > 0) {
    if (y & 1) result = (result * x) % mod
    x = (x * x) % mod
    y >>= 1
  }
  return result
}
