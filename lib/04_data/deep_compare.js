"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function isObjectAndNotNull(obj) {
    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object" && typeof obj != null;
}

function deepEqual(left, right) {
    // compare key
    var keys = [];
    if (isObjectAndNotNull(left)) {
        keys = keys.concat(Object.keys(left));
    }
    // loop through keys for comparison
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            // Key exists?
            var keysExistAndMatching = !!left[key] && !!right[key];
            if (isObjectAndNotNull(left[key])) {
                return deepEqual(left[key], right[key]);
            }
            if (keysExistAndMatching) {
                // compare value    
                return left[key] === right[key];
            } else {
                return false;
            }
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