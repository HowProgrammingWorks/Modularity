'use strict';

const node = require('./node.js');
const npm = require('./npm.js');

// Use modules as usual

node.fs.readFile('./application.js', (error, data) => {
  if (error) {
    console.log({ error });
  } else {
    console.log({ data });
  }
});

// Show what we have

console.log({ node, npm });
