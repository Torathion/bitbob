/**
 *  Half-precision floating-point difference between the smallest representable value above 1 and 1, a.k.a. epsilon, IEEE754
 */
export const F16_EPS = 0.0009765625
/**
 *  Half-precision floating point square root epsilon, IEEE754
 */
export const F16_SEPS = 0.03125
/**
 *  Half-precision floating point cube root epsilon, IEEE754
 */
export const F16_CEPS = 0.09921256574801247
/**
 *  Single-precision floating-point difference between the smallest representable value above 1 and 1, a.k.a. epsilon, IEEE754
 */
export const F32_EPS = 1.1920928955078125e-7
/**
 *  Single-precision floating point square root epsilon, IEEE754
 */
export const F32_SEPS = 0.0003452669770922512
/**
 *  Single-precision floating point cube root epsilon, IEEE754
 */
export const F32_CEPS = 0.004921566694974899
/**
 *  Double-precision floating-point difference between the smallest representable value above 1 and 1, a.k.a. epsilon, IEEE754
 */
export const F64_EPS = 2.220446049250313e-16
/**
 *  Double-precision floating point square root epsilon, IEEE754
 */
export const F64_SEPS = 0.1490116119384765625e-7
/**
 *  Double-precision floating point cube root epsilon, IEEE754
 */
export const F64_CEPS = 0.0000060554544523933395
/**
 *  Double-precision floating point fourth root epsilon, IEEE754
 */
export const F64_FROOT_EPS = 0.0001220703125
/**
 *  Half-precision floating-point bias, IEEE754
 */
export const F16_BIAS = 15
/*
 *  Single-precision floating-point bias, IEEE754
 */
export const F32_BIAS = 127
/**
 *  Double-precision floating-point bias, IEEE754
 */
export const F64_BIAS = 1023
// SIZES IN BYTES
/**
 *  Size of a Int8Array number
 */
export const I8_SIZE = 1
/**
 *  Size of a Int16Array number
 */
export const I16_SIZE = 2
/**
 *  Size of a Int32Array number
 */
export const I32_SIZE = 4
/**
 *  Size of a Int64Array number
 */
export const I64_SIZE = 8
/**
 *  Size of a UInt8Array number
 */
export const UI8_SIZE = 1
/**
 *  Size of a UInt16Array number
 */
export const UI16_SIZE = 2
/**
 *  Size of a UInt32Array number
 */
export const UI32_SIZE = 4
/**
 *  Size of a UInt64Array number
 */
export const UI64_SIZE = 8
/**
 *  Size of a Float32Array number
 */
export const F32_SIZE = 4
/**
 *  Size of a Float64Array number
 */
export const F64_SIZE = 8
// BOUNDS
/**
 *  Biggest possible number of a signed 32 number value-wise. Note: This is NOT 1 << 31.
 */
export const INT32_MAX = 2147483647
/**
 *  Smallest possible number of a signed 32 number value-wise. Note: This is 1 << 31.
 */
export const INT32_MIN = -2147483648
/**
 * The effective number of significant bits in half-precision floating-point (includes 1 hidden bit, IEEE754 standard).
 */
export const F16_PREC = 11

/**
 * The effective number of significant bits in single-precision floating-point (includes 1 hidden bit, IEEE754 standard).
 */
export const F32_PREC = 24

/**
 * The effective number of significant bits in double-precision floating-point (includes 1 hidden bit, IEEE754 standard).
 */
export const F64_PREC = 53

// EXPONENTS
/**
 * The maximum base-10 exponent for half-precision floating-point values.
 */
export const MAX_F16_EXP = 5

/**
 * The maximum base-10 exponent for single-precision floating-point values.
 */
export const MAX_F32_EXP = 38

/**
 * The maximum base-10 exponent for double-precision floating-point values.
 */
export const MAX_F64_EXP = 308

/**
 * The minimum base-10 exponent for half-precision floating-point values.
 */
export const MIN_F16_EXP = -5

/**
 * The minimum base-10 exponent for single-precision floating-point values.
 */
export const MIN_F32_EXP = -38

/**
 * The minimum base-10 exponent for double-precision floating-point values.
 */
export const MIN_F64_EXP = -308

/**
 * The minimum base-2 exponent for normalized double-precision floating-point values.
 */
export const MIN_F64_2EXP = -1022

// NORMALIZED VALUES
/**
 * The smallest positive normalized value for half-precision floating-point (IEEE754 standard).
 */
export const MIN_F16_NORM = 6.103515625e-5

/**
 * The smallest positive normalized value for single-precision floating-point (IEEE754 standard).
 */
export const MIN_F32_NORM = 1.1754943508222875e-38

/**
 * The smallest positive normalized value for double-precision floating-point (IEEE754 standard).
 */
export const MIN_F64_NORM = 2.2250738585072014e-308

// SUBNORMAL VALUES
/**
 * The smallest positive subnormal value for half-precision floating-point (IEEE754 standard).
 */
export const MIN_F16_SUBNORM = 5.960464477539063e-8

/**
 * The smallest positive subnormal value for single-precision floating-point (IEEE754 standard).
 */
export const MIN_F32_SUBNORM = 1.401298464324817e-45

/**
 * The smallest positive subnormal value for double-precision floating-point (IEEE754 standard).
 */
export const MIN_64_SUBNORM = 4.940656458412465e-324

/**
 * The maximum base-10 exponent for subnormal half-precision floating-point values.
 */
export const MAX_F16_10SUBNORM = -5

/**
 * The maximum base-10 exponent for subnormal single-precision floating-point values.
 */
export const MAX_F32_10SUBNORM = -38

/**
 * The maximum base-10 exponent for subnormal double-precision floating-point values.
 */
export const MAX_F64_10SUBNORM = -308

/**
 * The maximum base-2 exponent for subnormal half-precision floating-point values.
 */
export const MAX_F16_2SUBNORM = -15

/**
 * The maximum base-2 exponent for subnormal single-precision floating-point values.
 */
export const MAX_F32_2SUBNORM = -127

/**
 * The maximum base-2 exponent for subnormal double-precision floating-point values.
 */
export const MAX_F64_2SUBNORM = -1023

/**
 * The minimum base-10 exponent for subnormal double-precision floating-point values.
 */
export const MIN_F64_10SUBNORM = -324

/**
 * The minimum biased base-2 exponent for subnormal double-precision floating-point values.
 */
export const MIN_F64_2SUBNORM = -1074

// MASKS
/**
 * High word mask for the exponent and sign in double-precision floating-point numbers (IEEE754 standard).
 */
export const F64_HIGHMASK = 2146435072

/**
 * High word significant mask for double-precision floating-point numbers (IEEE754 standard).
 */
export const F64_HIGHSMASK = 1048575
