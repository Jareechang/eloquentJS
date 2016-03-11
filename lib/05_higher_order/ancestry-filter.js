'use strict';

var _ancestry = require('./ancestry.js');

var _ancestry2 = _interopRequireDefault(_ancestry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ancestry = JSON.parse(_ancestry2.default);

// Filter

var filter = function filter(arr, test) {
    var passed = [];
    for (var i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
            passed.push(arr[i]);
        }
    }
    return passed;
};

var filterByDate = function filterByDate(min, max) {
    return function (person) {
        return person.born > min && person.born < max;
    };
};

// Log individuals born between 1900 and 1925 non-inclusive

console.log(filter(ancestry, filterByDate(1900, 1925)));