'use strict';

var _ancestry = require('./ancestry.js');

var _ancestry2 = _interopRequireDefault(_ancestry);

var _ancestryComposability = require('./ancestry-composability.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ancestry = JSON.parse(_ancestry2.default);

/**
 *  compute the average age difference between mothers and childrens
 */

var byName = {};
ancestry.forEach(function (p) {
  return byName[p.name] = p;
});

var ageDiff = function ageDiff(p) {
  return p.born - byName[p.mother].born;
};
var hasMother = function hasMother(p) {
  return !!p.mother && !!byName[p.mother];
};

console.log((0, _ancestryComposability.average)(ancestry.filter(hasMother).map(ageDiff)));