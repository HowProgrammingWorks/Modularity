'use strict';

const fs = require('node:fs').promises;
const vm = require('node:vm');

const RUN_OPTIONS = { timeout: 5000, displayErrors: false };

const load = async (filePath, sandbox) => {
  const src = await fs.readFile(filePath, 'utf8');
  const code = `'use strict';\n${src}`;
  const script = new vm.Script(code);
  const context = vm.createContext(Object.freeze({ ...sandbox }));
  const exports = script.runInContext(context, RUN_OPTIONS);
  return exports;
};

const main = async () => {
  const sandbox = { Map: class PseudoMap {} };
  const exported = await load('./h-example.mm', sandbox);
  console.log(exported);
};

main();
