# interval-multiply

multiply two intervals together where an interval is represented by a 2 part array.

extracted from [Implicit Solid Modeling Using Interval Methods](http://jenchienjackchang.com/sample-page/implicit-solid-modeling-using-interval-methods/)

## install

`npm install interval-multiply`

## use

```javascript
var imul = require('interval-multiply');

console.log(imul([1, 2], [2, 3]))
// output: [2, 6]

console.log(imul([-1, 3], [-1, 3]))
// output: [0, 9]
```

### api signature

__imul__(`a`, `b`, `out`)

* `a` is the first interval (2 part array)
* `b` is the second interval (2 part array)
* `out` is an optional 2 part araray. Provide this to avoid generating garbage
* returns: 2 part array
