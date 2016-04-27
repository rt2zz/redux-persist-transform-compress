## redux-persist-transform-compress
Uses [lz-string](https://github.com/pieroxy/lz-string) to compress state before storing.

#### Usage
```js
import createCompressor from 'redux-persist-transform-compress'

const compressor = createCompressor()
const compressor = createCompressor({ whitelist: ['someGiganticReducer'] }) // or
const compressor = createCompressor({ blacklist: ['someSpecialReducer'] }) // or

persistStore(store, { transforms: [compressor] })
```
