# Changelog

## [2.0.0] 03-17-2025

- !!BREAKING!!: Removed every function that acted like a replacement to the `Math` built-in
- !!BREAKING!!: Removed every functional programming function
- !!BREAKING!!: Removed every constant except `INT32_MAX` and `INT32_MIN`
- !!BREAKING!!: Renamed `INT32_MAX` and `INT32_MIN` to `I32_MAX` and `I32_MIN`

- Added `roundNextMultPow2` to round to the next multiple of a power of 2
- Added `iLogPow2` to calculate the inverse logarithm of a power of 2
- Added `ILog2Sequence` to be able to inline algorithms utilizing `iLogPow2`
- Added `nextAfter` to quickly determine the next valid float number when counting up.

## [1.0.8] 03-08-2025

- Fixed edge case of `round(-2.5) !== Math.round(-2.5)`

## [1.0.7] 02-23-2025

- Fix build error when using ESM.

## [1.0.6] 02-23-2025

- Fix missing types error.

## [1.0.5] 02-22-2025

- Add CJS support.


## [1.0.4] 01-18-2025

- Mark project as side-effects-free
