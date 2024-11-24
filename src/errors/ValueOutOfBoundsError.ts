export default class ValueOutOfBoundsError extends Error {
  constructor(value: number | string) {
    super(`Value ${value} out of bit bounds!`)
    this.name = 'ValueOutOfBoundsError'
  }
}
