"use strict";

var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    console.log(current);
}

// Abstract log into function

function logEach(array) {
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        console.log(current);
    }
}

// Abstract into more generic function

function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        action(current);
    }
}

// Example 1

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);

// Example 2

var numbers = [1, 2, 3, 4, 5],
    sum = 0;

forEach(numbers, function (number) {
    sum += number;
});

console.log(sum);