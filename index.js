/**
 * reduced overhead transform stream
 */

module.exports = thru

function thru(fn){ return new thr(fn) }
function thr(fn){ this._transform = fn; Transform.call(this) }
