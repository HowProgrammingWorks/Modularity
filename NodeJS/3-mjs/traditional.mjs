import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import os from 'node:os';
import http from 'node:http';
import util from 'node:util';
import crypto from 'node:crypto';
import timers from 'node:timers';

import pg from 'pg';
import redis from 'redis';
import ws from 'ws';
import metacom from 'metacom';
import metalog from 'metalog';
import metavm from 'metavm';

// Use modules as usual

fs.readFile('./application.mjs', (error, data) => {
  if (error) {
    console.log({ error });
  } else {
    console.log({ data });
  }
});

// Show what we have

const node = { fs, path, vm, os, http, util, crypto, timers };
const npm = { pg, redis, ws, metacom, metalog, metavm };
console.log({ node, npm });
