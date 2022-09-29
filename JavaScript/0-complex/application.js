'use strict';

const api = {};
api.fs = require('node:fs');
api.vm = require('node:vm');
api.timers = require('node:timers');

const application = {};
application.unit1 = require('./lib/unit1');
application.unit2 = require('./lib/unit2');
require('./lib/unit3')(api, application);

application.reloadUnit = (name) => {
  const moduleKey = require.resolve('./lib/' + name);
  delete require.cache[moduleKey];
  const module = require('./lib/' + name);
  if (typeof module === 'function') module(api, application);
};

application.startWatching = () => {
  api.fs.watch('./lib', (eventType, filename) => {
    if (eventType === 'change') {
      console.log(eventType, filename);
      application.reloadUnit('unit3.js');
    }
  });
};

application.startWatching();
application.unit1.showPaths();
