import node from './node.mjs';
import npm from './npm.mjs';

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
