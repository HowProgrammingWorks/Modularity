import pg from 'pg';
import redis from 'redis';
import ws from 'ws';
import metacom from 'metacom';
import metalog from 'metalog';
import metavm from 'metavm';

const npm = { pg, redis, ws, metacom, metalog, metavm };
Object.freeze(npm);

export default npm;
