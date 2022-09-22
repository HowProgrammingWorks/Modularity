'use strict';

const fs = require('node:fs');
const events = require('node:events');
const timers1 = require('node:timers');
const timers2 = require('node:timers/promises');
const ws = require('ws');
const exp = require('./1-export.js');

console.log(Object.keys(fs));
console.log(Object.keys(events));
console.log(Object.keys(timers1));
console.log(Object.keys(timers2));
console.log(Object.keys(ws));
console.log(Object.keys(exp));
