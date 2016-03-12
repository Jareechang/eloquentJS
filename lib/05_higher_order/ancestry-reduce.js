'use strict';

var _ancestry = require('./ancestry.js');

var _ancestry2 = _interopRequireDefault(_ancestry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ancestry = JSON.parse(_ancestry2.default);

/**
 * @method reduce
 * reduce an array, and reduces/"folds" the array one element
 * at a time
 * 
 * @param {Array} array - initial array 
 * @param {Function} combine - function which combines 
 * the previous and last element
 * @param {Number} start - starting value for the reduce
 */

var reduce = function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++) {
        current = combine(current, array[i]);
    }
    return current;
};

// Basic example with numbers

console.log(reduce([1, 2, 3, 4], function (a, b) {
    return a + b;
}, 0));

// Most known ancient Ancestor

console.log(ancestry.reduce(function (curr, min) {
    if (curr.born < min.born) return curr;else return min;
}));