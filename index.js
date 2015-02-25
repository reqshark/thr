/**
 * reduced overhead transform stream
 */
var Transform = require('stream').Transform
require('utildot').inherits(thr, Transform)

module.exports = function (fn,flush) { return new thr(fn, flush) }

function thr(fn,flush){
  if(flush) this._flush = flush
  this._transform = fn
  Transform.call(this)
}
