import node from './node.mjs';
import npm from './npm.mjs';

// Alternatively: import identifiers explicitly
// import { fs } from './node.mjs';

// Use modules as usual

node.fs.readFile('./application.mjs', (error, data) => {
  if (error) {
    console.log({ error });
  } else {
    console.log({ data });
  }
});

// Show what we have

console.log({ node, npm });
