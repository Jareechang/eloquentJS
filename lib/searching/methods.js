"use strict";

var Break = { toString: function toString() {
        return "Break";
    } };

function show(result) {
    console.log(result);
}

function forEach(array, action) {
    try {
        for (var i = 0; i < array.length; i++) {
            action(array[i]);
        }
    } catch (exception) {
        if (exception != Break) throw exception;
    }
}

var op = {
    "+": function _(a, b) {
        return a + b;
    },
    "==": function _(a, b) {
        return a == b;
    },
    "===": function _(a, b) {
        return a === b;
    },
    "!": function _(a) {
        return !a;
    },
    "!=": function _(a, b) {
        return a != b;
    }
};

function asArray(quasiArray, start) {
    var result = [];
    for (var i = start || 0; i < quasiArray.length; i++) {
        result.push(quasiArray[i]);
    }
    return result;
};

function partial(func) {
    var fixedArgs = asArray(arguments, 1);
    return function () {
        return func.apply(null, fixedArgs.concat(asArray(arguments)));
    };
};

function any(test, array) {
    for (var i = 0; i < array.length; i++) {
        var found = test(array[i]);
        if (found) return found;
    }
    return false;
}

function member(array, value) {
    return any(partial(op["==="], value), array);
}

// test - member
//console.log(member(["Fear", "Loathing"], "Fear"));

function every(test, array) {
    for (var i = 0; i < array.length; i++) {
        var found = test(array[i]);
        if (!found) return found;
    }
    return true;
}

// Test - every
//show(every(partial(op["!="], 1), [1, 2, -1]));

function flatten(arrays) {
    var result = [];
    forEach(arrays, function (array) {
        forEach(array, function (element) {
            result.push(element);
        });
    });
    return result;
}

function filter(array, test) {
    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (test(item)) result.push(item);
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

    return result;
}

show(filter([1, 2, 3, 4, 5, 6, 7, 8, 8, 8], function (x) {
    return x > 5;
}));