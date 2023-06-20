'use strict';

const node = require('./node.js');
const npm = {};

const pkgPath = node.path.join(node.process.cwd(), 'package.json');
const pkg = require(pkgPath);

if (pkg.dependencies) {
  const modules = Object.keys(pkg.dependencies);
  for (const dependency of modules) {
    npm[dependency] = require(dependency);
  }
}

module.exports = Object.freeze(npm);
