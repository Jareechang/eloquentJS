"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function isObjectAndNotNull(obj) {
    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object" && typeof obj != null;
}

function keyExist(left, right) {
    return !!left && !!right;
}

function matchKey(left, right) {
    return left === right;
}

function deepEqual(left, right) {
    var keys = [];
    if (isObjectAndNotNull(left)) {
        keys = keys.concat(Object.keys(left));
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var leftKey = left[key];
            var rightKey = right[key];
            if (isObjectAndNotNull(leftKey)) {
                return deepEqual(leftKey, rightKey);
            }
            return keyExist(leftKey, rightKey) ? matchKey(leftKey, rightKey) : false;
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
}

var obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));