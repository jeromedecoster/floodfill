
module.exports = floodfill
module.exports.all = all

function floodfill(array, x, y, search, replace) {
  var rows = array.length
  var cols = array[0].length
  var inside = function(x, y) {
    return x >= 0 && x < cols && y >= 0 && y < rows
  }

  var q = []
  if (inside(x, y) && array[y][x] == search) {
    q.push(x, y)
  }
  else return

  var count = 0
  var x0 = x1 = x
  var y0 = y1 = y
  var cx, cy, west, east

  while (q.length) {
    cx = q.shift()
    cy = q.shift()
    if (array[cy][cx] == search) {
      west = east = cx
      while (inside(west - 1, cy) && array[cy][west - 1] == search) { west-- }
      while (inside(east + 1, cy) && array[cy][east + 1] == search) { east++ }

      if (x0 > west) x0 = west
      if (x1 < east) x1 = east
      if (y0 > cy) y0 = cy
      if (y1 < cy) y1 = cy

      for (var i = west; i <= east; i++) {
        count++
        array[cy][i] = replace


        if (inside(i, cy - 1) && array[cy - 1][i] == search) q.push(i, cy - 1)
        if (inside(i, cy + 1) && array[cy + 1][i] == search) q.push(i, cy + 1)
      }
    }
  }

  var w = x1 - x0 + 1
  var h = y1 - y0 + 1

  return {
    count: count,
    x: x0,
    y: y0,
    width: w,
    height: h,
    area: w * h
  }
}

function all(array, search, replace) {
  var arr = []
  var rows = array.length
  var cols = array[0].length
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      if (array[y][x] == search) {
        arr.push(floodfill(array, x, y, search, replace))
      }
    }
  }
  if (arr.length) return arr
}
