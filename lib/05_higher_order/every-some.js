"use strict";

/**
 * @method every 
 * test if every item in array passes the predicate test 
 * then return true if conditions passes else false
 *
 * @param {Array} [arr]  - argument for the function
 * @param {Function} test - callback predicate function
 * 
 */

var every = function every(array, predicate) {
    var res = null;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            var testPasses = predicate(item);
            testPasses ? res = true : res = false;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return res;
};

console.log(every([NaN, NaN, NaN], isNaN));

/**
 * @method some 
 * test if some item in array passes the predicate test 
 * then return true if conditions passes else false
 *
 * @param {Array} [arr]  - argument for the function
 * @param {Function} test - callback predicate function
 * 
 */

var some = function some(array, predicate) {
    var res = null;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            var testPasses = predicate(item);
            if (testPasses) {
                return true;
            } else {
                res = false;
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return res;
};

console.log(some([5, 3, 4], isNaN));