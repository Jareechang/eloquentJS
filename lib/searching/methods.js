"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
    },
    ">": function _(a, b) {
        return b > a;
    },
    "<": function _(a, b) {
        return b < a;
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

function map(transform, array) {
    var result = [];
    forEach(array, function (item) {
        result.push(transform(item));
    });
    return result;
}

function filter(test, array) {
    var result = [];
    forEach(array, function (item) {
        if (test(item)) result.push(item);
    });
    return result;
}
// Test - filter
//show(filter(partial(op[">"], 5), [1,2,3,4,5,6,7,8,9]));

// exporting methods
exports.filter = filter;
exports.flatten = flatten;
exports.every = every;
exports.member = member;
exports.any = any;
exports.partial = partial;
exports.asArray = asArray;
exports.forEach = forEach;
exports.map = map;