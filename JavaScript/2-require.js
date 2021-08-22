'use strict';

const fs = require('fs');
const events = require('node:events'); // > 16
const ws = require('ws');
const exp = require('./1-export.js');

console.log(Object.keys(fs));
console.log(Object.keys(events));
console.log(Object.keys(ws));
console.log(Object.keys(exp));
