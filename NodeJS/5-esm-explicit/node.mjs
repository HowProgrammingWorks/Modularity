import util from 'node:util';
import path from 'node:path';
import buffer from 'node:buffer';
import os from 'node:os';
import v8 from 'node:v8';
import vm from 'node:vm';
import child_process from 'node:child_process';
import worker_threads from 'node:worker_threads';
import stream from 'node:stream';
import fs from 'node:fs';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import readline from 'node:readline';
import async_hooks from 'node:async_hooks';
import timers from 'node:timers';
import timersPromises from 'node:timers/promises';
import events from 'node:events';
import dns from 'node:dns';
import net from 'node:net';
import tls from 'node:tls';
import http from 'node:http';
import https from 'node:https';
import http2 from 'node:http2';
import dgram from 'node:dgram';

const node = Object.freeze({
  util,
  path,
  buffer,
  os,
  v8,
  vm,
  child_process,
  worker_threads,
  stream,
  fs,
  fsp: fs.promises,
  crypto,
  zlib,
  readline,
  async_hooks,
  timers: { ...timers, promises: timersPromises },
  events,
  dns,
  net,
  tls,
  http,
  https,
  http2,
  dgram,
  process,
});

export default node;
