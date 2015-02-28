# thr

reduced overhead transform stream. same interface as `through2` but lighter

# install
```bash
$ npm i thr
```

#  use
```js
var thr = require('thr')
var t  = thr(function (msg, _, cb) {

  //push or change the incoming data
  this.push(msg)

  //callback moves stream forward to next chunk
  cb()
})

//pipe to it from some source stream, like readable
readable.pipe(t)
```
