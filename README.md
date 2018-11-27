## redux-persist-transform-compress
Uses [lz-string](https://github.com/pieroxy/lz-string) to compress state before storing.

#### Usage
```js
import storage from 'redux-persist/lib/storage';
import createCompressor from 'redux-persist-transform-compress'

const compressor = createCompressor()  // or
const compressor = createCompressor({ whitelist: ['someGiganticReducer'] })  // or
const compressor = createCompressor({ blacklist: ['someSpecialReducer'] })

const persistConfig = {
  key: 'root',
  transforms: [compressor],
  storage,
};
```
