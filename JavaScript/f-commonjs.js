'use strict';

const fs = require('node:fs').promises;
const vm = require('node:vm');

const RUN_OPTIONS = { timeout: 5000, displayErrors: false };

const pseudoRequire = (name) => {
  console.log(`Intercepted require: ${name}`);
};

const load = async (filePath, sandbox) => {
  const src = await fs.readFile(filePath, 'utf8');
  const code = `(require, module, __filename, __dirname) => {\n${src}\n}`;
  const script = new vm.Script(code);
  const context = vm.createContext(Object.freeze({ ...sandbox }));
  const wrapper = script.runInContext(context, RUN_OPTIONS);
  const module = {};
  wrapper(pseudoRequire, module, filePath, __dirname);
  return module.exports;
};

const main = async () => {
  const sandbox = { Map: class PseudoMap {} };
  const exported = await load('./1-export.js', sandbox);
  console.log(exported);
};

main();
