import {pushItems, unshiftItems, addItemsInIndex, removeItem, removeItemsById} from '../lib/immutableHelpers'

import test from 'ava'

test('pushItems', t => {
  const arr = [{a: 1}, {b: 2}]
  const result = pushItems(arr, [{c: 3}, {d: 4}])
  const expected = [{a: 1}, {b: 2}, {c: 3}, {d: 4}]

  t.false(arr === result)
  t.deepEqual(result, expected)
})

test('unshiftItems', t => {
  const arr = [{a: 1}, {b: 2}]
  const result = unshiftItems(arr, [{c: 3}, {d: 4}])
  const expected = [{c: 3}, {d: 4}, {a: 1}, {b: 2}]

  t.false(arr === result)
  t.deepEqual(result, expected)
})

test('addItemsInIndex', t => {
  const arr = [{a: 1}, {b: 2}]
  const result = addItemsInIndex(arr, 1, [{c: 3}, {d: 4}])
  const expected = [{a: 1}, {c: 3}, {d: 4}, {b: 2}]

  t.false(arr === result)
  t.deepEqual(result, expected)
})

test('removeItem', t => {
  const arr = [{a: 1}, {b: 2}, {c: 3}]
  const result = removeItem(arr, 1)
  const expected = [{a: 1}, {c: 3}]

  t.false(arr === result)
  t.deepEqual(result, expected)
})

test('removeItemsById', t => {
  const arr = [{id: 1, val: 'a'}, {id: 2, val: 'b'}, {id: 3, val: 'c'}, {id: 4, val: 'd'}]
  const result = removeItemsById(arr, [{id: 2, val: 'doesnt matter'}, {id: 4}])
  const expected = [{id: 1, val: 'a'}, {id: 3, val: 'c'}]

  t.false(arr === result)
  t.deepEqual(result, expected)
})