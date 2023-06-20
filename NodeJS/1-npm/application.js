'use strict';

const { fs, path, vm, os, http, util, crypto, timers } = require('./node.js');
const { pg, redis, ws, metacom, metalog, metavm } = require('./npm.js');

// Use modules as usual

fs.readFile('./application.js', (error, data) => {
  if (error) {
    console.log({ error });
  } else {
    console.log({ data });
  }
});

// Show what we have

const node = { fs, path, vm, os, http, util, crypto, timers };
const npm = { pg, redis, ws, metacom, metalog, metavm };
console.log({ node, npm });
