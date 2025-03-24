import { describe, expect, it, test } from 'vitest'
import Bitmap from '../../src/classes/Bitmap'
import rotateLeft from '../../src/utils/manipulation/rotateLeft'
import createBitmapStates from '../../src/utils/helper/createBitmapStates'

function createFullBitmap(): Bitmap {
  return new Bitmap(0b1111111111111111111111111111111)
}

describe('Bitmap', () => {
  it('can create', () => {
    expect(() => new Bitmap()).not.toThrowError()
  })

  it('can set a state', () => {
    const bitmap = new Bitmap()
    bitmap.set(4)

    expect(bitmap.state).not.toBe(0)
    expect(bitmap.state).toBe(4) // 100

    bitmap.set(16)
    expect(bitmap.state).toBe(20) // 10100
  })

  it('can check if a flag is set', () => {
    const bitmap = new Bitmap()

    bitmap.set(2)

    expect(bitmap.has(2)).toBe(true)
  })

  describe('get', () => {
    it('can get the state of a flag', () => {
      const bitmap = new Bitmap()
      bitmap.set(1)
      expect(bitmap.get(1)).toBe(true)
      expect(bitmap.get(2)).toBe(false)

      bitmap.toggle(1)
      expect(bitmap.get(1)).toBe(false)
    })

    it('works with states', () => {
      const bitmap = new Bitmap()
      const Test = createBitmapStates(['A', 'B', 'C', 'D', 'E', 'F'])

      bitmap.set(Test.A)
      bitmap.set(Test.C)

      expect(bitmap.get(Test.A)).toBe(true)
      expect(bitmap.get(Test.B)).toBe(false)
      expect(bitmap.get(Test.C)).toBe(true)

      bitmap.toggle(Test.A)
      bitmap.toggle(Test.B)

      expect(bitmap.get(Test.A)).toBe(false)
      expect(bitmap.get(Test.B)).toBe(true)
      expect(bitmap.get(Test.C)).toBe(true)
    })

    it('works with large states', () => {
      const bitmap = new Bitmap()
      const Test = createBitmapStates(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'])

      bitmap.set(Test.L)
      bitmap.set(Test.M)

      expect(bitmap.get(Test.A)).toBe(false)
      expect(bitmap.get(Test.L)).toBe(true)
      expect(bitmap.get(Test.M)).toBe(true)

      bitmap.toggle(Test.L)
      bitmap.toggle(Test.M)
      bitmap.toggle(Test.I)

      expect(bitmap.get(Test.L)).toBe(false)
      expect(bitmap.get(Test.M)).toBe(false)
      expect(bitmap.get(Test.I)).toBe(true)
    })
  })

  it('can unset a flag', () => {
    const bitmap = new Bitmap()
    bitmap.set(2)

    expect(bitmap.has(2)).toBe(true)

    bitmap.unset(2)

    expect(bitmap.has(2)).toBe(false)
  })

  it('can toggle a flag', () => {
    const bitmap = new Bitmap()
    bitmap.toggle(2)

    expect(bitmap.has(2)).toBe(true)

    bitmap.toggle(2)

    expect(bitmap.has(2)).toBe(false)
  })

  it('can rest the whole state map', () => {
    const bitmap = new Bitmap()
    bitmap.apply(1 | 2 | 4 | 16)

    expect(bitmap.state).not.toBe(0)

    bitmap.clear()

    expect(bitmap.state).toBe(0)
  })

  it('can apply multiple flags at once', () => {
    const bitmap = new Bitmap()
    bitmap.apply(4 | 2) // set third and second flag to have the state 110
    expect(bitmap.state).toBe(6)
  })

  describe('isMet', () => {
    it('checks if a subset of a state meets some criteria (AND)', () => {
      const bitmap = new Bitmap()
      bitmap.apply(2 | 4 | 8 | 64 | 256) // 334 -> 101001110

      expect(bitmap.isMet(14)).toBe(true) // 14 = 1110 is included in 334
      expect(bitmap.isMet(320)).toBe(true) // 320 = 101000000 is included in 334
      expect(bitmap.isMet(1)).toBe(false)
    })

    it('only checks for the targeted bits', () => {
      const b1 = new Bitmap(0b1111111111111111000)

      expect(b1.isMet(1 | 2 | 4)).toBe(false)
      expect(b1.isMet(8 | 16)).toBe(true)
      expect(b1.isMet(4 | 8 | 16)).toBe(false)

      const b2 = new Bitmap(0b0011000)
      expect(b2.isMet(1 | 2)).toBe(false)
      expect(b2.isMet(4 | 8)).toBe(false)
      expect(b2.isMet(8 | 16)).toBe(true)
      expect(b2.isMet(16 | 32)).toBe(false)
    })

    it('works with state maps', () => {
      const bitmap = new Bitmap()
      const Test = createBitmapStates(['A', 'B', 'C', 'D', 'E', 'F'])

      bitmap.set(Test.A)
      bitmap.set(Test.C)
      expect(bitmap.isMet(Test.A | Test.C)).toBe(true)
      expect(bitmap.isMet(Test.A | Test.B)).toBe(false)
      expect(bitmap.isMet(Test.C | Test.D)).toBe(false)

      bitmap.unset(Test.A)
      bitmap.set(Test.B)

      expect(bitmap.isMet(Test.A | Test.C)).toBe(false)
      expect(bitmap.isMet(Test.C | Test.B)).toBe(true)
    })
  })

  describe('has', () => {
    it('checks if at least one flag of the subset is met (OR)', () => {
      const bitmap = new Bitmap()
      bitmap.apply(2 | 4 | 8 | 64 | 256)

      expect(bitmap.has(14)).toBe(true) // Check for multiple true
      expect(bitmap.has(1 | 2)).toBe(true) // 1 is not set, but 2 (10) is set
      expect(bitmap.has(0)).toBe(false) // 0 is not set
    })

    it('only checks for the targeted bits', () => {
      const b1 = new Bitmap(0b111000)

      expect(b1.has(1 | 2 | 4)).toBe(false)
      expect(b1.has(8)).toBe(true)
      expect(b1.has(1 | 8 | 256)).toBe(true)
      expect(b1.has(1 | 256)).toBe(false)
    })

    it('works with state maps', () => {
      const bitmap = new Bitmap()
      const Test = createBitmapStates(['A', 'B', 'C', 'D', 'E', 'F'])

      bitmap.set(Test.A)
      bitmap.set(Test.C)
      expect(bitmap.has(Test.A | Test.C)).toBe(true)
      expect(bitmap.has(Test.A | Test.B)).toBe(true)
      expect(bitmap.has(Test.C | Test.D)).toBe(true)
      expect(bitmap.has(Test.B | Test.D)).toBe(false)

      bitmap.unset(Test.A)
      bitmap.set(Test.B)

      expect(bitmap.has(Test.A | Test.C)).toBe(true)
      expect(bitmap.has(Test.A | Test.B)).toBe(true)
      expect(bitmap.has(Test.D | Test.A)).toBe(false)
    })
  })

  it('flips the entire state map', () => {
    const bitmap = createFullBitmap()
    bitmap.flip()
    expect(bitmap.state).toBe(0)

    bitmap.clear() // set to 0
    bitmap.flip() // Activate all states
    expect(bitmap.state).toBe(0b1111111111111111111111111111111)

    bitmap.clear()
    bitmap.apply(0b1111000011110000111100001111000)
    bitmap.flip()
    expect(bitmap.state).toBe(0b0000111100001111000011110000111)
  })

  it('can count the number of activated flags', () => {
    const bitmap = new Bitmap()

    expect(bitmap.activeStates).toBe(0)

    bitmap.apply(0b1111111111111111111111111111111)
    expect(bitmap.activeStates).toBe(31)

    bitmap.clear()
    bitmap.apply(2 | 4 | 8 | 64 | 256)
    expect(bitmap.activeStates).toBe(5)
  })

  it('can flip a field of flags', () => {
    const bitmap = new Bitmap()

    bitmap.flipRange(0, 3)
    expect(bitmap.state).toBe(15)

    bitmap.flipRange(0, 3)
    expect(bitmap.state).toBe(0)
  })

  it('can clear a range of flags', () => {
    const bitmap = createFullBitmap()
    bitmap.clearRange(0, 4)
    expect(bitmap.state).toBe(0b1111111111111111111111111110000)

    const bitmap2 = createFullBitmap()
    bitmap2.clearRange(2, 7)
    expect(bitmap2.state).toBe(0b1111111111111111111111110000011)
  })

  describe('clearRange', () => {
    it('can clear a range of flags', () => {
      const bitmap = createFullBitmap()
      bitmap.clearRange(0, 4)
      expect(bitmap.state).toBe(0b1111111111111111111111111110000)

      const bitmap2 = createFullBitmap()
      bitmap2.clearRange(2, 7)
      expect(bitmap2.state).toBe(0b1111111111111111111111110000011)
    })

    it('does nothing on already cleared flags', () => {
      const b1 = new Bitmap()
      b1.clearRange(0, 15)
      expect(b1.state).toBe(0)

      const b2 = new Bitmap(15) // First 4 bits sets
      b2.clearRange(5, 8)
      expect(b2.state).toBe(15) // Shouldn't touch the first 4 bits
    })
  })

  describe('setRange', () => {
    it('can set a range of flags', () => {
      const b1 = new Bitmap()
      b1.setRange(0, 4)
      expect(b1.state).toBe(15)

      const b2 = new Bitmap()
      b2.setRange(2, 7)
      expect(b2.state).toBe(124) // 1111100
    })

    it('does nothing on already set flags', () => {
      const b1 = createFullBitmap()
      b1.setRange(0, 4)
      expect(b1.state).toBe(0b1111111111111111111111111111111)

      const b2 = new Bitmap(0b1111111111111111111111001111100)
      b2.setRange(2, 7)
      expect(b2.state).toBe(0b1111111111111111111111001111100) // Shouldn't touch surrounding flags
    })
  })

  test('state can be altered raw', () => {
    const bitmap = new Bitmap()

    bitmap.apply(2 | 4 | 8 | 64 | 256) // 334 -> 101001110
    bitmap.state = rotateLeft(bitmap.state, 1)

    expect(bitmap.state).toBe(0b1010011100)
  })

  it('can be converted to json', () => {
    expect(new Bitmap().toJSON()).toBe('{ state: 0 }')

    const bitmap = new Bitmap()
    bitmap.set(1)
    bitmap.set(2)
    expect(bitmap.toJSON()).toBe('{ state: 3 }')
  })
})
