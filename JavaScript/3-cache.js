'use strict';

const exp = require('./1-export.js');
console.log(require.cache);

const path = require.resolve('./3-cache.js');
console.log(path);
