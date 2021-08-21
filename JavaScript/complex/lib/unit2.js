'use strict';

const unit2 = {};
module.exports = unit2;

unit2.methodName = () => {
  console.log('unit2.methodName returns unit2.CONSTANT_NAME');
  return unit2.CONSTANT_NAME;
};

unit2.CONSTANT_NAME = 'Hello here';
