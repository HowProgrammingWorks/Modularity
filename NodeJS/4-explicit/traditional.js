'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const os = require('node:os');
const http = require('node:http');
const util = require('node:util');
const crypto = require('node:crypto');
const timers = require('node:timers');

const pg = require('pg');
const redis = require('redis');
const ws = require('ws');
const metacom = require('metacom');
const metalog = require('metalog');
const metavm = require('metavm');

// Use modules as usual

fs.readFile('./application.js', (error, data) => {
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
