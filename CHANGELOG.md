# Changelog

## [3.0.0] 03-23-2025

### Breaking

- Changed how `Bitmap` states are used and parsed. Check the demo code in the README.
- Replaced `isSet` of `Bitmap` with `has` as they have the same logic.
- Adjusted `Bitmap` logic to completely remove inconsistencies of arguments being either bit positions or powers of 2. Now almost all functions only accept powers of 2.

### Changed

- Improved performance of `ComposedNumber`.
- Add abstract class `BitHandler` to unify bit sequence handler classes and help templating them.
- Adds `createBitmapStates` helper function to easily create `Bitmap` states.
- Adjust types and documentation

## [2.0.0] 03-17-2025

### Breaking

- Removed every function that acted like a replacement to the `Math` built-in
- Removed every functional programming function
- Removed every constant except `INT32_MAX` and `INT32_MIN`
- Renamed `INT32_MAX` and `INT32_MIN` to `I32_MAX` and `I32_MIN`

### Changed

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
