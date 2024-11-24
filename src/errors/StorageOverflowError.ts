export default class StorageOverflowError extends Error {
  constructor(value: number | string) {
    super(`Storing ${value} exceed the storage limit`)
    this.name = 'StorageOverflowError'
  }
}
