export default class IndexOutOfBoundsError extends Error {
  constructor(id: number) {
    super(`Index ${id} is out of bounds!`)
    this.name = 'IndexOutOfBoundsError'
  }
}
