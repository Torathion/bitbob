# bitbob

<p align="center">
<h1 align="center">Core bit manipulated algorithms for faster performance</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/bitbob"><img src="https://img.shields.io/npm/v/bitbob?style=for-the-badge&logo=npm"/></a>
  <a href="https://npmtrends.com/bitbob"><img src="https://img.shields.io/npm/dm/bitbob?style=for-the-badge"/></a>
  <a href="https://bundlephobia.com/package/bitbob"><img src="https://img.shields.io/bundlephobia/minzip/bitbob?style=for-the-badge"/></a>
  <a href="https://github.com/Torathion/bitbob/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Torathion/bitbob?style=for-the-badge"/></a>
  <a href="https://codecov.io/gh/torathion/bitbob"><img src="https://codecov.io/gh/torathion/bitbob/branch/main/graph/badge.svg?style=for-the-badge" /></a>
  <a href="https://github.com/torathion/bitbob/actions"><img src="https://img.shields.io/github/actions/workflow/status/torathion/bitbob/build.yml?style=for-the-badge&logo=esbuild"/></a>
<a href="https://github.com/prettier/prettier#readme"><img alt="code style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier"></a>
</p>
</p>

This is a vast collection of bit manipulation algorithms for specific mathematical algorithms. Each function is designed to be as fast and small as possible, while giving correct and stable results. It's a tree-shakable library, so only take what you need!

```powershell
    pnpm i bitbob
```

 While there are bit hacks for algorithms like `max` or `min`, implementing them in JS and providing them as a function is slower than the actual built-in `Math` functions that directly call C++ code. Some bit hacks are so small that they are hard to use as a function because of typical function overhead. Therefore, here is a compiled list of other tiny math optimizations through bit hacks you can do: [List](https://github.com/Torathion/bitbob/blob/main/docs/more-bit-tricks.md)

### Reduce your memory usage!

Data structures sometimes come with a very complex lifecycle to, for example, handle user input. Instead of creating dozens of boolean properties for each and every single state, we can compact everything to ONE number.

```typescript

import { BitMap, createBitmapStates } from 'bitbob'

// This creates a LUT (lookup table) for the Bitmap structure to work with.
// The values of the parsed array are the keys and each key-value pair is a different power of 2, depending on the order of the given keys.
const States = createBitmapStates([
    'Starting', // 0b1
    'Closing', // 0b10
    'Scrolling' // 0b100
    'Zooming', // 0b1000
    'Traversing', // 0b10000
    'Passthrough' // 0b100000
])

export default class Component {
    states = new BitMap()

    update() {
        // Checks for one state
        if (this.states.has(States.Closing)) return cleanup()
        // Checks for multiple states at once. This reduces the number of needed checks as this is an AND operation!
        else if (this.states.isMet(States.Scrolling | States.Zooming)) { // = 12 = 1100
            // `has` can also check for multiple states at once, acting as an OR operation!
            if (this.states.has(States.Traversing | States.Passthrough))
            this.move()
        }
    }

    scroll() {
        // Each set state is isolated from another and can not interfere with others.
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
    // Apply bit maks to extract values without much performance issues.
    const height = data & 0x3FF         // Width = 1020 AND 10 bit mask
    const width = data >> 10 & 0x7FF    // Height = 1980 AND 11 bit mask plus shift to right from previous number
    return //...
}

// ComposedNumber takes care that each given number is stored properly without collisions
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
