'use strict';

var _ancestry = require('./ancestry.js');

var _ancestry2 = _interopRequireDefault(_ancestry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ancestry = JSON.parse(_ancestry2.default);

/**
 * build an object representing objects by the persons
 * name 
 */

var byName = {};

ancestry.forEach(function (person) {
  return byName[person.name] = person;
});

console.log(byName);