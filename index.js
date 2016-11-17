var reduxPersist = require('redux-persist')
var createTransform = reduxPersist.createTransform
var LZ = require('lz-string')
var stringify = require('json-stringify-safe')

function inbound (state, key) {
  state = stringify(state)
  return LZ.compressToUTF16(state)
}

function outbound (state, key) {
  if (typeof state !== 'string') {
    if (process.env.NODE_ENV !== 'production') console.error('redux-persist-transform-compress: expected outbound state to be a string')
    return state
  }
  try {
    var newState = JSON.parse(LZ.decompressFromUTF16(state))
    return newState
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') console.error('redux-persist-transform-compress: error while decompressing state', err)
    return null
  }
}

module.exports = function (config) {
  return createTransform(inbound, outbound, config)
}
