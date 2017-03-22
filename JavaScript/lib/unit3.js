'use strict';

const unit3 = {};
const LOCAL_CONSTANT = 'local value';
const EXPORTED_CONSTANT = 'exported value';

module.exports = (api, application) => {

  application.unit3 = unit3;
  unit3.EXPORTED_CONSTANT = EXPORTED_CONSTANT;

  unit3.doSomething = () => {
    console.log('Local constant: ' + LOCAL_CONSTANT);
    console.log('Exported constant: ' + unit3.EXPORTED_CONSTANT);
    console.log('Imported constant: ' + application.unit2.CONSTANT_NAME);
  };

  unit3.doSomethingElse = () => {
  };

  unit3.doSomethingSpecial = () => {
  };

};
