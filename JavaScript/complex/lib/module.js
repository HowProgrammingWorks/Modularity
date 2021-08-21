'use strict';

module.exports = (api, metasync) => {

  const FILE_SCOPE_CONSTANT = 100;
  metasync.MODULE_SCOPE_CONSTANT = 200;
  api.metasync.EXPORTED_CONSTANT = 300;

  const fileScopeFunction = () => {};
  metasync.moduleScopeFunction = () => {};
  api.metasync.exportedFunction = () => {};

};
