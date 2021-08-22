'use strict';

module.exports = (api, application) => {
  const FILE_SCOPE_CONSTANT = 100;
  application.APPLICATION_SCOPE_CONSTANT = 200;
  api.metasync.EXPORTED_CONSTANT = 300;

  const fileScopeFunction = () => {};
  application.applicationScopeFunction = () => {};
  api.metasync.exportedFunction = () => {};

  console.log({
    FILE_SCOPE_CONSTANT,
    fileScopeFunction,
  });
};
