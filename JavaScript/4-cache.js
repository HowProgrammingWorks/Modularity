'use strict';

const ex1 = require('./1-export.js');
const modulePath = require.resolve('./1-export.js');
console.log({ required: modulePath });
console.log(require.cache[modulePath]);
delete require.cache[modulePath];
console.log({ cached: require.cache[modulePath] });
const ex2 = require('./1-export.js');
console.log(ex1 === ex2);

const ws = require('ws');
const wsPath = require.resolve('ws');
console.log(ws, wsPath);
console.log(Object.keys(require.cache));
