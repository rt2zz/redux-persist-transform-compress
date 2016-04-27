import { createTransform } from 'redux-persist'
import LZ from 'lz-string'
import stringify from 'json-stringify-safe'

function inbound (state, key) {
  if (typeof state !== 'string') state = stringify(state)
  return LZ.compress(state)
}

function outbound (state, key) {
  if (typeof state !== 'string') {
    if (process.env.NODE_ENV !== 'production') console.error('redux-persist-transform-compress: expected outbound state to be a string')
    return state
  }
  return LZ.decompress(state)
}

export default function (config) {
  return createTransform(inbound, outbound, config)
}
