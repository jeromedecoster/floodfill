# floodfill

> 4 directions floodfill for 2d array

With fast algorithm &ndash; <a href="https://en.wikipedia.org/wiki/Flood_fill#Alternative_implementations" target="_blank">west to east with queue</a> &ndash; and some statistics returned

## Install

```bash
npm i jeromedecoster/floodfill
```

## API

#### floodfill(array, x, y, search, replace)

Start from a coordinate

```js
var floodfill = require('floodfill')

var array = [
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

// {count: 23, x: 1, y: 1, width: 7, height: 7, area: 49}
var ret = floodfill(array, 4, 4, 0, 2)

/*
[
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
*/
console.log(array)
```

#### floodfill.all(array, search, replace)

Scan all the array

```js
var floodfill = require('floodfill')

var array = [
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

/*
[
  {count: 8,  x: 1, y: 1, width: 3, height: 3, area: 9},
  {count: 23, x: 1, y: 1, width: 7, height: 7, area: 49},
  {count: 8,  x: 5, y: 5, width: 3, height: 3, area: 9}
]
*/
var ret = floodfill.all(array, 0, 2)

/*
[
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
*/
console.log(array)
```

## Thanks

Mainly forked / inspired on <a href="https://github.com/Yonaba/FloodFill" target="_blank">floodfill</a> and <a href="https://en.wikipedia.org/wiki/Flood_fill" target="_blank">wikipedia</a>

## License

MIT
