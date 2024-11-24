/**
 *	Calculates the unsigned remainder of the given number modulo a given mod. This is most useful as `-1 % 5` has a different behavior as its signed.
 *
 * 	@param n - target number
 * 	@param mod - target mod
 * 	@returns the unsigned remainder of the given number modulo a given mod
 */
export default function unsignedMod(n: number, mod: number): number {
  return ((n % mod) + mod) % mod
}
