'use strict';

var _ancestry = require('./ancestry.js');

var _ancestry2 = _interopRequireDefault(_ancestry);

var _ancestryComposability = require('./ancestry-composability.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ancestry = JSON.parse(_ancestry2.default);
var byCentury = {};
var isArray = function isArray(arr) {
    return arr instanceof Array;
};
var insertValue = function insertValue(k, v) {
    return byCentury[k].push(v);
};

var groupBy = function groupBy() {
    var pluck = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var p = arguments[1];

    var century = Math.ceil(p.died / 100);
    var arrayExist = isArray(byCentury[century]);
    var arrayDoesntExist = !arrayExist;
    if (arrayDoesntExist) {
        byCentury[century] = [];
    }
    !!pluck ? insertValue(century, pluck(p)) : insertValue(century, p);
};

// Bind an optional callback to pluck the life expectancy in groupBy function
ancestry.forEach(groupBy.bind(null, function (p) {
    return p.died - p.born;
}));

var averageAgebyCentury = Object.keys(byCentury).map(function (c) {
    return { c: Number((0, _ancestryComposability.average)(byCentury[c]).toFixed(2)) };
});

console.log(averageAgebyCentury);