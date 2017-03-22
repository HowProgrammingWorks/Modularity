'use strict';

module.exports = {

  showPaths() {
    console.dir({
      '__dirname': __dirname,
      '__filename': __filename,
      'process.cwd()': process.cwd()
    });
  },

  doSomething() {
    console.log('Somenting done');
  }

};
