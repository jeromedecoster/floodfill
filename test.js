const floodfill = require('.')
const test = require('tape')

var array

function init() {
  array = [
    [1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,1,0,0,0,0,1],
    [1,1,1,0,0,0,1,1,1],
    [1,0,0,0,0,1,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1]
  ]
}

test('fill (1,1)', function (t) {

  init()

  var map = [
    [1,1,1,1,1,1,1,1,1],
    [1,2,2,2,1,0,0,0,1],
    [1,2,2,2,1,0,0,0,1],
    [1,2,2,1,0,0,0,0,1],
    [1,1,1,0,0,0,1,1,1],
    [1,0,0,0,0,1,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1]
  ]

  var obj = {count: 8, x: 1, y: 1, width: 3, height: 3, area: 9}

  var ret = floodfill(array, 1, 1, 0, 2)

  t.deepEqual(array, map)
  t.deepEqual(ret, obj)
  t.end()
})

test('fill (4,4)', function (t) {

  init()

  var map = [
    [1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,2,2,2,1],
    [1,0,0,0,1,2,2,2,1],
    [1,0,0,1,2,2,2,2,1],
    [1,1,1,2,2,2,1,1,1],
    [1,2,2,2,2,1,0,0,1],
    [1,2,2,2,1,0,0,0,1],
    [1,2,2,2,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1]
  ]

  var obj = {count: 23, x: 1, y: 1, width: 7, height: 7, area: 49}

  var ret = floodfill(array, 4, 4, 0, 2)

  t.deepEqual(array, map)
  t.deepEqual(ret, obj)
  t.end()
})

test('wrong search', function (t) {

  init()

  var map = [
    [1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,1,0,0,0,0,1],
    [1,1,1,0,0,0,1,1,1],
    [1,0,0,0,0,1,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1]
  ]

  var ret = floodfill(array, 1, 1, 1, 2)

  t.deepEqual(array, map)
  t.equal(ret, undefined)
  t.end()
})

test('all', function (t) {

  init()

  var map = [
    [1,1,1,1,1,1,1,1,1],
    [1,2,2,2,1,2,2,2,1],
    [1,2,2,2,1,2,2,2,1],
    [1,2,2,1,2,2,2,2,1],
    [1,1,1,2,2,2,1,1,1],
    [1,2,2,2,2,1,2,2,1],
    [1,2,2,2,1,2,2,2,1],
    [1,2,2,2,1,2,2,2,1],
    [1,1,1,1,1,1,1,1,1]
  ]

  var obj = [
    {count: 8,  x: 1, y: 1, width: 3, height: 3, area: 9},
    {count: 23, x: 1, y: 1, width: 7, height: 7, area: 49},
    {count: 8,  x: 5, y: 5, width: 3, height: 3, area: 9}
  ]

  var ret = floodfill.all(array, 0, 2)

  t.deepEqual(array, map)
  t.deepEqual(ret, obj)
  t.end()
})

test('all wrong search', function (t) {

  init()

  var map = [
    [1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,1,0,0,0,0,1],
    [1,1,1,0,0,0,1,1,1],
    [1,0,0,0,0,1,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1]
  ]

  var ret = floodfill.all(array, 3, 2)

  t.deepEqual(array, map)
  t.equal(ret, undefined)
  t.end()
})
