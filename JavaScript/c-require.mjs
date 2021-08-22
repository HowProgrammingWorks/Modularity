'use strict';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
console.log(Object.keys(fs));
