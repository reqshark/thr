/**
 * reduced overhead transform stream
 */
var Transform = require('stream').Transform
require('utildot').inherits(thr, Transform)

module.exports = thru

function thru(fn){ return new thr(fn) }
function thr(fn){ this._transform = fn; Transform.call(this) }
