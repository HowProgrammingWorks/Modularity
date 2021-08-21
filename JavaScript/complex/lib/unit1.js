'use strict';

module.exports = {

  showPaths() {
    console.dir({
      __dirname,
      __filename,
      'process.cwd()': process.cwd()
    });
  },

  doSomething() {
    console.log('Somenting done');
  }

};
