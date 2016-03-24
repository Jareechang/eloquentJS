'use strict';

var _sum_range = require('../04_data/sum_range.js');

// Array Seq Interface
function logFive(object) {
    // Ensure iteration does not exceed number of items in array
    while (object.hasIteration()) {
        if (object.exceedsFiveLogst()) {
            break;
        }
        console.log(object.next());
        object.increment();
    }
}

function ArraySeq(array) {
    this.array = array;
    this.index = 0;
}

ArraySeq.prototype.next = function () {
    if (this.hasIteration()) {
        return this.array[this.index];
    } else {
        return null;
    }
};

ArraySeq.prototype.hasIteration = function () {
    return this.index < this.array.length;
};

ArraySeq.prototype.increment = function () {
    this.index += 1;
};

ArraySeq.prototype.exceedsFiveLogs = function () {
    return this.index > 5;
};

logFive(new ArraySeq([1, 2]));

// Range Seq interface
function RangeSeq(min, max) {
    this.array = (0, _sum_range.range)(min, max);
    this.index = 0;
}

// Inheriting the functionality from ArraySeq
RangeSeq.prototype = Object.create(ArraySeq.prototype);

logFive(new RangeSeq(100, 1000));