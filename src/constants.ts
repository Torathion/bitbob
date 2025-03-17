export const I32_MAX = 2147483647
export const I32_MIN = -2147483648

/* De-Bruijin sequence to calculate the inverse log 2 of a power of 2 (or their trailing zeros) */
export const ILog2Sequence = new Int8Array([
  0, 1, 2, 16, 3, 6, 17, 21, 14, 4, 7, 9, 18, 11, 22, 26, 31, 15, 5, 20, 13, 8, 10, 25, 30, 19, 12, 24, 29, 23, 28, 27
])
