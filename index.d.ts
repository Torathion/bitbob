declare module 'bitbob' {
  /**
   *   A data structure that represents a compact storage of up to 31 different
   *   boolean values by using the conversion of `0` for `false` and `1` for `true`.
   *
   *   It is recommended to use an `enum` for easier handling of this class.
   */
  export class Bitmap {
    constructor(initialState?: number)
    /**
     *  Applies a state as a mask to the bitmap.
     *
     *  @param mask - state to apply.
     */
    apply(mask: number): void
    /**
     *  Clears the entire cached state.
     */
    clear(): void
    /**
     *  Clears a field of flags at once (0 counting).
     *
     *  @param start - starting bit position.
     *  @param end - ending bit position.
     */
    clearRange(start: number, end: number): void
    /**
     *  Flips the entire state.
     */
    flip(): void
    /**
     *  Flips a field of flags at once (0 counting).
     *
     *  @param start - starting bit position.
     *  @param end - ending bit position.
     */
    flipRange(start: number, end: number): void
    /**
     *  Checks if at least one flag of the given mask is set.
     *
     *  This is an equivalent to checking multiple `OR` operations at once.
     *
     *  @param mask - possible flags to check.
     *  @returns `true`, if at least one flag is set, otherwise `false`.
     */
    has(mask: number): boolean
    /**
     *  Checks if a specific subset of a state is met.
     *
     *  @param mask - subset condition.
     *  @returns `true`, if the subset is met, otherwise `false`.
     */
    isMet(mask: number): boolean
    /**
     *  Checks if a specific flag (bit) is set.
     *
     *  @param bit - the flag to check.
     *  @returns `true`, if the flag is set, otherwise `false`.
     */
    isSet(bit: number): boolean
    /**
     *  Sets a specific flag.
     *
     *  @param bit - the flag to set.
     */
    set(bit: number): void
    /**
     *  Sets a field of flags at once (0 counting).
     *
     *  @param start - starting bit position.
     *  @param end - ending bit position.
     */
    setRange(start: number, end: number): void
    /**
     *  Gets the current state of the bitmap.
     */
    get state(): number
    /**
     *  Sets a new state for the bitmap.
     */
    set state(newState: number)
    /**
     *  Gets the number of active states.
     */
    get activeStates(): number
    /**
     *  Toggles a specific flag.
     *
     *  @param bit - the flag to toggle.
     */
    toggle(bit: number): void
    /**
     *  Converts the bitmap to a json-viable string.
     *
     *  @returns a json-viables string in form of hte current inner state.
     */
    toJSON(): string
    /**
     *  Unsets a specific flag.
     *
     *  @param bit - the flag to unset.
     */
    unset(bit: number): void
  }
  /**
   * A data structure that stores multiple smaller numbers in one big number to save space and computation power.
   *
   * Numbers are added from right to left, meaning the more numbers you store, the bigger the state. Each number is assigned to a static
   * field, separated by the pointer start indices. There is the possibility to address more space than currently used.
   */
  export default class ComposedNumber {
    constructor(initialState?: number, reserve?: number)
    /**
     * Copies the current `ComposedNumber` into a new one.
     *
     * @returns the newly created `ComposedNumber`.
     */
    copy(): ComposedNumber
    /**
     * Stores a number into the 32-bit number.
     *
     * @param value - Number to store.
     * @param reserve - Bit length to reserve.
     */
    set(value: number, reserve?: number): void
    /**
     * Returns the nth number stored inside the composed number.
     *
     * @param id - The nth number.
     * @returns The stored number.
     */
    get(id: number): number
    /**
     * !!DANGER!! Entirely overwrites the state and pointers of the number.
     *
     * @param state - New state.
     * @param pointers - New pointers.
     */
    overwrite(state: number, pointers: number[]): void
    /**
     * Removes the number from the store.
     *
     * @param id - Nth number to remove.
     */
    remove(id: number): void
    /**
     * Updates a specific number of the storage.
     *
     * @param id - Target number position.
     * @param value - The newly updated value.
     */
    update(id: number, value: number): void
    /**
     * Strictly searches for a stored number.
     *
     * @param value - Target value.
     * @returns `true` if the store has this value stored, otherwise `false`.
     */
    has(value: number): boolean
    /**
     * Finds the index of a stored number.
     *
     * @param value - Target value.
     * @returns The index of the number or -1 if not found.
     */
    indexOf(value: number): number
    /**
     * Clears the whole storage.
     */
    clear(): void
    /**
     * Returns the raw state of the composed number.
     */
    get state(): number
    /**
     * Returns the bit sequence pointers array to iterate through the state raw.
     */
    get pointers(): number[]
    /**
     * Returns the number of stored numbers inside the number.
     */
    get storedNumbers(): number
    /**
     * Returns the currently available space left in the number in bits.
     */
    get availableSpace(): number
    /**
     * Returns the used space in the number in bits.
     */
    get usedSpace(): number
  }
  /**
   *  Determines if the given number has an even parity.
   *
   *  @param x - target number.
   *  @returns `true` if the number has an even parity, otherwise false.
   */
  export function hasEvenParity(x: number): boolean
  /**
   *  Determines if a number has unset bits in the sequence.
   *
   *  @param x - target number.
   *  @returns `true`, if the number has unset bits, otherwise `false`.
   */
  export function hasUnsetBits(x: number): boolean
  /**
   *  Checks if a given 32bit integer has a zero byte in any of its 32 bits.
   *
   *  @param x - target number
   *  @returns `true` if it has a zero byte, otherwise `false`.
   */
  export function hasZeroByte(x: number): boolean
  /**
   *  Guard function to check if two numbers have different signs.
   *
   *  @param x - first number to check.
   *  @param y - second number to check.
   *  @returns `true`, if both numbers have different signs, otherwise `false`.
   */
  export function haveOppositeSigns(x: number, y: number): boolean
  /**
   *  Guard function to check if two numbers have same signs.
   *
   *  @param x - first number to check.
   *  @param y - second number to check.
   *  @returns `true`, if both numbers have same signs, otherwise `false`.
   */
  export function haveSameSigns(x: number, y: number): boolean
  /**
   *  Checks whether the given number is [denormalized](https://en.wikipedia.org/wiki/Subnormal_number)
   *
   *  @param n - the target number
   *  @returns `true`, if the number is denormalized, otherwise `false`.
   */
  export function isDenormalized(n: number): boolean
  /**
   *  Guard function to check if a number is even.
   *
   *  @param x - number to check.
   *  @returns `true`, if the number is even, otherwise `false`.
   */
  export function isEven(x: number): boolean
  /**
   *  Determines if a specific field is all set.
   *
   *  @param x - target number.
   *  @param size - size of the field.
   *  @param shift - position of the field.
   *  @returns `true`, if every bit of the field is set, otherwise `false`.
   */
  export function isFieldSet(x: number, size: number, shift?: number): boolean
  /**
   *  Checks if a given number is a 32 bit integer.
   *
   *  @param x - target number
   *  @returns `true`, if the number is a 32 bit integer, otherwise `false`.
   */
  export function isInt(x: number): boolean
  /**
   *  Determines if the bit sequence of a given number is a palindrome. (010, 101, 0110, 1001, ...)
   *
   *  @param x - target number.
   *  @returns `true`, if the sequence is a palindrome, otherwise `false`.
   */
  export function isPalindrome(x: number): boolean
  /**
   *  Determines if a given number is a power of 2.
   *
   *  @param x - target number.
   *  @returns `true`, if the number is a power of 2, otherwise `false`.
   */
  export function isPow2(x: number): boolean
  /**
   *  Determines if a given number is a power of 4.
   *
   *  @param x - target number.
   *  @returns `true`, if the number is a power of 4, otherwise `false`.
   */
  export function isPow4(x: number): boolean
  /**
   *  Guard function to check if a specific bit of a given number is set or not.
   *
   *  @param x - the target number.
   *  @param bit - the bit to check.
   *  @returns `true`, if the specified bit is set, otherwise `false`.
   */
  export function isSet(x: number, bit: number): boolean
  /**
   *  Determines if a given number is sparse or not.
   *
   *  @param x - target number.
   *  @returns `true`, if the number is sparse, otherwise `false`
   */
  export function isSparse(x: number): boolean
  /**
   *  Loosely compares two integers by a given threshold.
   *
   *  @param x - first number to compare.
   *  @param y - second number to compare.
   *  @param threshold - the comparison threshold.
   *  @returns true, if both numbers loosely equal by the given threshold, otherwise false.
   */
  export function looseCompare(x: number, y: number, threshold: number): boolean
  /**
   *  Creates a mask beginning from a starting index to an end index (0 counting).
   *
   *  @param start - start index.
   *  @param end - end index.
   *  @returns the resulting bit mask.
   */
  export function createRangeMask(start: number, end: number): number
  /**
   *  Creates a bit mask with an optional shift.
   *
   *  @param size - size of the mask, i.e 2 is 11 or 3 is 111
   *  @param shift - shift of the mask, i.e. 2 is 100 or 3 is 1000
   *  @returns the bit mask
   */
  export function createSizeMask(size: number, shift?: number): number
  /**
   *  Converts the lower and higher order bits to a 32-bit unsigned double precision number.
   *
   *  @param low - the low bits of a number
   *  @param high - the high bits of a number
   *  @returns the combined 32-bit unsigned double precision number.
   */
  export function toDouble(low: number, high: number): number
  /**
   *  Gets the lower order bits of the given IEEE 754 double precision number.
   *
   *  @param n - the target number.
   *  @returns the low bits of the given number.
   */
  export function getLow(n: number): number
  /**
   *  Gets the higher order bits of the given IEEE 754 double precision number.
   *
   *  @param n - the target number.
   *  @returns the high bits of the given number.
   */
  export function getHigh(n: number): number
  /**
   * Clears (sets to 0) the bit at the given position in the number.
   *
   *  @param x - The number where the bit is to be cleared.
   *  @param bit - The position of the bit to clear (1-based index).
   *  @returns The new number with the specified bit cleared.
   */
  export function clear(x: number, bit: number): number
  /**
   *  Clears a group of bits, or "field," in a target number.
   *
   *  @param x - The target number where the field will be cleared.
   *  @param size - The size of the field (number of bits).
   *  @param shift - The starting position of the field (from the right). Default is `0`.
   *  @param mask - Optional bitmask to specify the field location.
   *  @returns The modified number with the specified field cleared (set to `0`).
   */
  export function clearField(x: number, size: number, shift?: number, mask?: number): number
  /**
   *  Clears the field beginning from the least significant bit. It does not matter if the lsb is set or not.
   *
   *  @param x - target number
   *  @param fieldLength - size of the field
   *  @returns the number without the cleared field.
   */
  export function clearFieldFromLsb(x: number, fieldLength: number): number
  /**
   *  Clears the field beginning from the most significant bit.
   *
   *  @param x - target number
   *  @param fieldLength - size of the field
   *  @returns the number without the cleared field.
   */
  export function clearFieldFromMsb(x: number, i: number): number
  /**
   *  Clears the least significant set bit (1) in a number.
   *
   *  @param x - The number from which the least significant set bit will be cleared.
   *  @returns The modified number with the least significant set bit cleared.
   */
  export function clearLsb(x: number): number
  /**
   *  Combines to 16 bit numbers into an unsigned 32 bit number.
   *
   *  @param low - low bits of the number.
   *  @param high - high bits of the number.
   *  @returns the unsigned 32 bit combination.
   */
  export function combine(low: number, high: number): number
  /**
   *  Calculates the number of the common least significant set bit of two numbers.
   *
   *  @param x - first number.
   *  @param y - second number.
   *  @returns 2^x the position of the lsb
   */
  export function commonLsb(x: number, y: number): number
  /**
   *  Deinterleaves a 32 bit number interleaved with 0.
   *
   *  @param x - the interleaved number.
   *  @returns the deinterleaved number.
   */
  export function deinterleave1(x: number): number
  /**
   *  Extracts the nth interleaved 16-bit component from a 32-bit 2 component interleaved number.
   *
   *  @param x - The target number
   *  @param n - Starting position (first or second component)
   *  @returns The nth interleaved component.
   */
  export function deinterleave2(x: number, n: number): number
  /**
   *  Extracts the nth interleaved 10-bit component from a 32-bit 3 component interleaved number.
   *
   *  @param x - The target number
   *  @param n - Starting position (first, second or third component)
   *  @returns The nth interleaved component.
   */
  export function deinterleave3(x: number, n: number): number
  /**
   *  Counterpart algorithm of `lsb`, which instead searches for the least significant bit difference. The position is presented as a power of 2.
   *
   *  @param x - first number
   *  @param y - second number
   *  @returns the power of 2 of the position of the least significant bit difference.
   */
  export function diffLsb(x: number, y: number): number
  /**
   *  Extracts a group of bits, also called "field", from the bit number.
   *
   *  @param n - target number
   *  @param size - size of the field
   *  @param shift - start position of the field (from right)
   *  @param mask - optional mask, if the mask already exists.
   *  @returns the extracted field.
   */
  export function extractField(n: number, size: number, shift?: number, mask?: number): number
  /**
   *  Determines the bit state of a certain position of the target number.
   *
   *  @param x - target number.
   *  @param bit - bit to search for.
   *  @returns the state of the target bit. Returns 0 for out of range bit.
   */
  export function get(x: number, bit: number): number
  /**
   *  Interleaves the lower 16 bits of a 32 bit integer with `0`.
   *
   *  @param x - target number.
   *  @returns the interwoven 32 bit integer of `x` and `0`.
   */
  export function interleave1(x: number): number
  /**
   * Interleaves the lower 16 bits of two integers.
   *
   *  @param x - The first number.
   *  @param y - The second number.
   *  @returns A 32-bit integer with bits interwoven from of the lower 16 bits of `x` and `y`.
   */
  export function interleave2(x: number, y: number): number
  /**
   * Interleaves the lower 10 bits of three integers.
   *
   *  @param x - The first number.
   *  @param y - The second number.
   *  @param z - The third number.
   *  @returns A 32-bit integer with bits interwoven from of the lower 19 bits of `x`, `y` and `z`.
   */
  export function interleave3(x: number, y: number, z: number): number
  /**
   *  Isolates the least significant set bit.
   *
   *  @param x - target number.
   *  @returns the isolated bit represented as a power of 2.
   */
  export function isolateLsb(x: number): number
  /**
   *  Isolates the right part of a bit sequence, starting from a given bit.
   *
   *  @param x - target number.
   *  @param bit - start position.
   *  @returns the isolated field.
   */
  export function isolateRight(x: number, bit: number): number
  /**
   *  Isolates the least significant unset bit.
   *
   *  @param x - target number.
   *  @returns the isolated bit represented as a power of 2.
   */
  export function isolateUnsetLsb(x: number): number
  /**
   *  Determines the least significant bit of a number as a number.
   *
   *  @param x - target number.
   *  @returns - the least significant bit as a number.
   */
  export function lsb(x: number): number
  /**
   *  Determines the most significant bit of a number as a number.
   *
   *  @param x - target number.
   *  @returns - the most significant bit field as a number.
   */
  export function msb(x: number): number
  /**
   *	Computes the next bit combination in colexicographic order
   *
   *  @param x - target number
   *  @returns the next bit combination in colexicographic order
   */
  export function nextCombination(x: number): number
  /**
   *  Computes the parity of a given number.
   *
   *  @param x - target number.
   *  @returns the parity of the number.
   */
  export function parity(x: number): number
  /**
   *  Identifies the position of the ONLY set bit in the entire number.
   *
   *  @param n - target number.
   *  @returns the position of the only set bit, or 1, if there are multiple set bits.
   */
  export function posOfSet(n: number): number
  /**
   *  Reverses the bits of a number.
   *
   *  @param x - target number.
   *  @returns the number corresponding to the reversed bit sequence.
   */
  export function reverse(x: number): number
  /**
   *  Propagates the rightmost set bit of a number to the right, filling all bits to the right of that bit with 1.
   *
   *  @param x - target number.
   *  @returns the propagated number, usually a power of 2.
   */
  export function rightPropagate(x: number): number
  /**
   *  Rotates the bits of an unsigned integer `n` to the left by `d` positions.
   *
   *  @param x - The number to rotate.
   *  @param shift - The number of positions to rotate to the left.
   *  @param size - The bit width of the number (default is 31).
   *  @returns The number after the left rotation.
   */
  export function rotateLeft(x: number, shift: number, size?: number): number
  /**
   *  Rotates the bits of an unsigned integer `n` to the right by `d` positions.
   *
   *  @param x - The number to rotate.
   *  @param shift - The number of positions to rotate to the right.
   *  @param size - The bit width of the number (default is 31).
   *  @returns the number after the right rotation.
   */
  export function rotateRight(x: number, shift: number, size?: number): number
  /**
   *  Sets a given bit of a given number.
   *
   *  @param x - target number.
   *  @param bit - bit position to set.
   *  @returns the modified number.
   */
  export function set(x: number, bit: number): number
  /**
   *  Sets a group of bits, or "field," in a target number to the value of another number.
   *
   *  @param x - The target number where the field will be set.
   *  @param y - The value to set in the field.
   *  @param size - The size of the field (number of bits).
   *  @param shift - The starting position of the field (from the right). Default is `0`.
   *  @param mask - Optional bitmask to specify the field location.
   *  @returns The modified number with the specified field set to `y`.
   */
  export function setField(x: number, y: number, size: number, shift?: number, mask?: number): number
  /**
   *  Sets the least significant unset bit.
   *
   *  @param x - The input number.
   *  @returns A new number with the least significant unset bit set.
   */
  export function setLeast(x: number): number
  /**
   *  Swaps adjacent bits in a number. For each pair of bits, the left bit is moved to the right and the right bit is moved to the left.
   *
   *  @param x - The input number.
   *  @returns A new number with all adjacent bits swapped.
   */
  export function swapAdjacent(x: number): number
  /**
   *  Toggles a bit at the given bit position of the given number.
   *
   *  @param x - target number.
   *  @param bit - bit position.
   *  @returns the modified number.
   */
  export function toggle(x: number, bit: number): number
  /**
   *  Wraps the given number to an unsigned number in the bit range of power 2.
   *
   *  @param x - target number.
   *  @param bitLimit - power of 2 bit limit.
   *  @returns the wrapped number.
   */
  export function unsignedWrap(x: number, bitLimit: number): number
  /**
   *  Wraps the given number to a signed number in the bit range of power 2.
   *
   *  @param x - target number.
   *  @param bitLimit - power of 2 bit limit.
   *  @returns the wrapped number.
   */
  export function wrap(x: number, bitLimit: number): number
  /**
   *  Computes the inverse sign of the given integer.
   *
   *  @param x - target integer
   *  @returns the inverse sign of the given integer.
   */
  export function aSign(x: number): number
  /**
   *  Returns the fractional part of a given double precision 32-bit unsigned number.
   *
   *  @param n - the target number.
   *  @returns the fractional part of the given number as a pair of numbers ([low, high]), where low is a 32 bit integer and his is a 21 bit integer.
   */
  export function doubleFrac(n: number): [number, number]
  /**
   *  Calculates the sign of a double precision unsigned 32-bit number.
   *
   *  @param n - the target number.
   *  @returns the sign of the given number.
   */
  export function doubleSign(n: number): number
  /**
   *  Calculates the exponent of a double precision unsigned 32-bit integer.
   *
   *  @param n - the target number.
   *  @returns the exponent of the given number.
   */
  export function expOf(n: number): number
  /**
   *  Calculates the Hamming distance between two integers.
   *  The Hamming distance is the number of positions at which the corresponding bits are different.
   *
   *  @param x - The first integer to compare.
   *  @param y - The second integer to compare.
   *  @returns The Hamming distance between the two integers. This is the number of differing bit positions.
   */
  export function hammingDistance(x: number, y: number): number
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
  export function modExp(x: number, y: number, mod: number): number
  /**
   * Computes the remainder of a number `x` divided by a power of 2.
   *
   *  This function is optimized for cases where the divisor is a power of 2,
   *  leveraging bitwise operations for efficiency.
   *
   *  @param x - The dividend, a number to be divided.
   *  @param power - A power of 2 to be used as the divisor.
   *  @returns the remainder when `x` is divided by `power`, or -1 if the number is not a power of 2
   */
  export function modPow2(x: number, power: number): number
  /**
   *  Computes the arithmetic negation of a given integer.
   *
   *  @param x - The number to negate.
   *  @returns the negation of `x`.
   */
  export function neg(x: number): number
  /**
   *  Calculates the closest power of 2 to a given number.
   *
   *  @param x - The input number. Must be a positive integer.
   *  @returns the power of 2 that is closest to `x`.
   */
  export function toClosestPow2(x: number): number
  /**
   *  Calculates the next power of 2 greater than or equal to the given number.
   *
   *  @param x - The input number. Must be a positive integer.
   *  @returns the next power of 2 greater than or equal to `x`.
   */
  export function toNextPow2(x: number): number
  /**
   *  Calculates the previous power of 2 greater than or equal to the given number.
   *
   *  @param x - The input number. Must be a positive integer.
   *  @returns the previous power of 2 greater than or equal to `x`.
   */
  export function toPrevPow2(x: number): number
  /**
   * Calculates the unsigned remainder of the given number modulo a given mod. This is most useful as `-1 % 5` has a different behavior as its signed.
   *
   *  @param n - target number
   *  @param mod - target mod
   *  @returns the unsigned remainder of the given number modulo a given mod
   */
  export function unsignedMod(n: number, mod: number): number
  /**
   *  Computes the unsigned remainder of a number `x` divided by a power of 2. It's a mix of `unsignedMod` and `modPow2`
   *
   *  @param x - The dividend, a number to be divided.
   *  @param power - A power of 2 to be used as the divisor.
   *  @returns the remainder when `x` is divided by `power`, or -1 if the number is not a power of 2
   */
  export function unsignedModPow2(x: number, power: number): number
  /**
   *  Counts all set bits (1) of a given number. This is also called the "hamming weight".
   *
   *  @param x - target number.
   *  @returns the amount of set bits.
   */
  export function countSetBits(x: number): number
  /**
   *  Counts all trailing set bits in a bit sequence.
   *
   *  @param x - target number.
   *  @returns amount of trailing set bits.
   */
  export function countTrailingOnes(x: number): number
  /**
   *  Counts the number of trailing zero of a number.
   *
   *  @param x - target number.
   *  @returns number of trailing zeros.
   */
  export function countTrailingZeros(x: number): number
  /**
   *  Counts the number of different bits between the both given integers.
   *
   *  @param x - first number.
   *  @param y - second number.
   *  @returns count of different bits.
   */
  export function diff(x: number, y: number): number
  /**
   *  Finds a number inside a number.
   *
   *  @param from - source number.
   *  @param x - target number.
   *  @returns the index of the bit position, otherwise `-1`, if not found.
   */
  export function find(from: number, x: number): number
  /**
   *  Finds the missing number in a linear integer number sequence.
   *
   *  @param array - number sequence.
   *  @returns the missing number of the sequence.
   */
  export function findMissingInSequence(array: ArrayLike<number> | number[]): number
  /**
   *  Finds the position of the least set significant bit.
   *
   *  @param n - target number.
   *  @returns bit position of the least set significant bit.
   */
  export function leastSet(n: number): number
  /**
   *  Calculates the bit length of a given number.
   *
   *  @param x - the target number.
   *  @returns the bit length of the given number.
   */
  export function length(x: number): number
  /**
   *  Returns the next floating point number after any given number towards another floating point number.
   *
   * @param x - target number
   * @param to - bound number
   * @returns the next floating point number towards the bound number
   */
  export function nextAfter(x: number, to: number): number
  /* De-Bruijin sequence to calculate the inverse log 2 of a power of 2 (or their trailing zeros) */
  export const ILog2Sequence: Int8Array
  /**
   *  Computes the inverse logarithm base 2 of the given number. This number already has to be a power of 2.
   *
   *  For arbitrary numbers, use `countTrailingZeros` instead.
   *
   *  @param x - The input number to compute the inverse log2 for. Must be a positive integer.
   *  @returns The approximate inverse log2 value from the precomputed sequence.
   */
  export function iLogPow2(x: number): number
  /**
   *  Rounds a given number to the next biggest multiple of the given power of 2.
   *
   *  @param x - target number.
   *  @param y - target power of 2.
   *  @returns the rounded number.
   */
  export function roundNextMultPow2(x: number, y: number): number
}
