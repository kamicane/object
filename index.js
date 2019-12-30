'use strict'

const {
  create,
  defineProperties,
  getOwnPropertyDescriptors,
  hasOwnProperty
} = Object

function object (...objects) {
  const object = create(null)
  for (const obj of objects) {
    defineProperties(object, getOwnPropertyDescriptors(obj))
  }
  return object
}

const hasOwn = (obj, key) => hasOwnProperty.call(obj, key)

object.entries = function * (obj) {
  for (const key in obj) {
    if (hasOwn(obj, key)) yield [key, obj[key]]
  }
}

object.keys = function * (obj) {
  for (const key in obj) {
    if (hasOwn(obj, key)) yield key
  }
}

object.values = function * (obj) {
  for (const key in obj) {
    if (hasOwn(obj, key)) yield obj[key]
  }
}

object.create = object
object.hasOwn = hasOwn

module.exports = object
