const xs_KotayBits = [0, 1, 2, 16, 3, 6, 17, 21, 14, 4, 7, 9, 18, 11, 22, 26, 31, 15, 5, 20, 13, 8, 10, 25, 30, 19, 12, 24, 29, 23, 28, 27]

// Only works for powers of 2 inputs
function xs_ILogPow2(v) {
  // Convert to unsigned 32-bit integer and perform the calculation
  // 0x04ad19df is the magic number from the original code
  // >>> 0 ensures unsigned 32-bit integer
  // >>> 27 performs the right shift (equivalent to >> 27 in the original)
  return xs_KotayBits[(v * 0x04ad19df) >>> 27]
}

let i = 1
for (let j = 0; j < 30; j++) console.log(2 ** j, xs_ILogPow2(2 ** j))
