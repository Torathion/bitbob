# bitbob

<p align="center">
<h1 align="center">Core bit math for faster performance</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/bitbob"><img src="https://img.shields.io/npm/v/bitbob?style=for-the-badge"/></a>
  <a href="https://npmtrends.com/bitbob"><img src="https://img.shields.io/npm/dm/bitbob?style=for-the-badge"/></a>
  <a href="https://bundlephobia.com/package/bitbob@1.0.5"><img src="https://img.shields.io/bundlephobia/minzip/bitbob?style=for-the-badge"/></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/Torathion/bitbob?style=for-the-badge"/></a>
  <a href="https://codecov.io/gh/torathion/bitbob"><img src="https://codecov.io/gh/torathion/bitbob/branch/main/graph/badge.svg?style=for-the-badge" /></a>
  <a href="https://github.com/torathion/bitbob/actions"><img src="https://github.com/torathion/bitbob/workflows/Test/badge.svg"/></a>
  <a href="https://github.com/torathion/bitbob/actions"><img src="https://github.com/torathion/bitbob/workflows/Build/badge.svg"/></a>
</p>
</p>

Speed up your math with smart little bit hacks from your smart little bit buddy!

```powershell
    pnpm i bitbob
```

### More performance through bit manipulation!

Instead of using built-in `Math` functions that are build to be as flexible and broad as possible, bitbob functions only focus on 32-bit integer, i.e. native numbers without a floating point component. This, for example, ups the performance of working with arrays (array indices, array length, array index pointers, ...).

```typescript
import { min } from 'bitbob'

export default function includes(a: string[], b: string[]): boolean {
    const len = min(a.length, b.length) // Faster than Math.min!
    for (let i = 0; i < len; i++) if (a[i] === b[i]) return true
    return false
}
```

Bitbob provides a lot more math replacements. Read [here](https://github.com/Torathion/bitbob/blob/main/docs/math-replacements.md) for more!

Some bit hacks are so small that they are hard to use them as a function because of typical function overhead. Therefore, here is a compiled list of other tiny math optimizations through bit hacks you can do: [List](https://github.com/Torathion/bitbob/blob/main/docs/more-bit-tricks.md)

### Reduce your memory usage!

Data structures sometimes come with a very complex lifecycle to, for example, handle user input. Instead of creating dozens of boolean properties for each and every single state, we can compact everything to ONE number.

```typescript

import { BitMap } from 'bitbob'

const enum States {
    Starting, // 0b1
    Closing, // 0b10
    Scrolling // 0b100
    Zooming, // 0b1000
    Traversing // 0b10000
}

export default class Component {
    states = new BitMap()

    update() {
        if (this.states.isSet(States.Closing)) return cleanup()
        else if (this.states.isMet(States.Scrolling | States.Zooming)) { // = 12 = 1100
            this.move()
        } 
    }

    scroll() {
        this.states.set(States.Scrolling)
    }

    zoom() {
        this.states.set(States.Zooming)
    }

    close() {
        this.states.set(States.Closing)
    }
}

```

This is not everything. You can also store numbers inside numbers!

```typescript

import { ComposedNumber } from 'bitbob'

function handleScreenRes(data: number) {
    const height = data & 0x3FF         // Width = 1020 AND 10 bit mask
    const width = data >> 10 & 0x7FF    // Height = 1980 AND 11 bit mask plus shift to right from previous number
    return //...
}

const cn = new ComposedNumber()
cn.set(1020)
cn.set(1980)

handleScreenRes(cn.state)
```

### Resources

Bitbob is a collection of old bit hacks ported to javascript for faster math and faster algorithms. The following includes resources for the used algorithms.

https://graphics.stanford.edu/~seander/bithacks.html

https://github.com/virtyaluk/Bit-Twiddling-Hacks

https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/cc6983c9ebd77c28e8ae85bc0e575360_MIT6_172F18_lec3.pdf

https://brilliant.org/wiki/bit-manipulation-hacks/

https://github.com/mikolalysenko/double-bits

https://medium.com/@amirulislamalmamun/bitwise-hacks-21a884f80481

---

© Torathion 2024
