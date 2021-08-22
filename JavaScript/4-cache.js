'use strict';

require('./1-export.js');

const modulePath = require.resolve('./1-export.js');
console.log({ modulePath });
console.log(require.cache[modulePath]);
delete require.cache[modulePath];
console.log(require.cache[modulePath]);

const ws = require('ws');
const wsPath = require.resolve('ws');
console.log(ws, wsPath);
console.log(Object.keys(require.cache));
