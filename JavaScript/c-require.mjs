import { createRequire } from 'node:module';
console.log({ 'import.meta': import.meta });
const require = createRequire(import.meta.url);

const fs = require('node:fs');
console.log(Object.keys(fs));

console.log({ require });
