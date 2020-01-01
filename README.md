# object

`[Object: null prototype]` utilities

## require

```js
const object = require('@kamicane/object')
```

## create

```js
object()
object(null)
object({ a: 1, b: 2, c: 3 })
```

## assign

```js
object({ a: 1, b: 2 }, { c: 3 }, { a: 2 })
```

## hasOwn

```js
object.hasOwn({ a: 1 }, 'a')
```

## proper iterators with generator functions

```js
;[...object.keys({ a: 1, b: 2, c: 3 })]
;[...object.values({ a: 1, b: 2, c: 3 })]
;[...object.entries({ a: 1, b: 2, c: 3 })]
```

> While it is easy to imagine that all iterators could be expressed as arrays, this is not true. Arrays must be allocated in their entirety, but iterators are consumed only as necessary and thus can express sequences of unlimited size. - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
