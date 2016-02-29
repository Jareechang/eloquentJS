"use strict";

function sum(arr) {
    var total = 0;
    // New es6 for...of
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var num = _step.value;

            total += num;
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

    return total;
}

function range(start, end, step) {
    var arr = [];
    var num = start;
    // Check step
    if (!step) {
        step = 1;
    }
    // Reverse the elements
    if (start > end) {
        var _ref = [end, start];
        start = _ref[0];
        end = _ref[1];
    }
    // Counts elements
    for (var i = start; i <= end; i++) {
        arr.push(num);
        num += step;
    }
    return arr;
}

// Range

console.log(range(1, 10));
console.log(range(5, 2, -1));

// Sum

console.log(sum(range(1, 10)));