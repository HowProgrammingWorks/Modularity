'use strict';

const node = {};
const tools = ['util', 'path', 'buffer', 'os', 'v8', 'vm'];
const multi = ['child_process', 'worker_threads'];
const streams = ['stream', 'fs', 'crypto', 'zlib', 'readline'];
const async = ['async_hooks', 'timers', 'timers/promises', 'events'];
const network = ['dns', 'net', 'tls', 'http', 'https', 'http2', 'dgram'];
const internals = [...tools, ...multi, ...streams, ...async, ...network];

for (const name of internals) node[name] = require(`node:${name}`);
node.process = process;
node.fsp = node.fs.promises;
node.timers.promises = node['timers/promises'];

module.exports = Object.freeze(node);
