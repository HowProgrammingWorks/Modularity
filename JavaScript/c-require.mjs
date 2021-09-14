import { createRequire } from 'module';
console.log({ 'import.meta': import.meta });
const require = createRequire(import.meta.url);

const fs = require('fs');
console.log(Object.keys(fs));

console.log({ require });
