'use strict';

// global.api = {};
const api = {};
api.fs = require('fs');
api.vm = require('vm');
api.timers = require('timers');

// global.application = {};
const application = {};
application.unit1 = require('./lib/unit1');
application.unit2 = require('./lib/unit2');
require('./lib/unit3')(api, application);

application.reloadUnit = name => {
  const moduleKey = require.resolve('./lib/' + name);
  delete require.cache[moduleKey];
  require('./lib/' + name)(api, application);
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
