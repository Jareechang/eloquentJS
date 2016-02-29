"use strict";

function reverseArray(arr) {
    var results = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        results.push(arr[i]);
    }
    return results;
}

function swap(firstIndex, lastIndex, mid, arr) {

    // Cache value
    var firstItem = arr[firstIndex];
    arr[firstIndex] = arr[lastIndex];
    arr[lastIndex] = firstItem;

    // Increment values
    firstIndex++;
    lastIndex--;

    if (firstIndex == mid || lastIndex == mid) {
        return arr;
    }

    swap(firstIndex, lastIndex, mid, arr);
}

function reverseInPlace(arr) {
    var firstIndex = 0;
    var lastIndex = arr.length - 1;
    var mid = Math.floor(arr.length / 2);
    return swap(firstIndex, lastIndex, mid, arr);
}

console.log(reverseArray(["A", "B", "C"]));

console.log(reverseInPlace([1, 2, 3, 4]));

console.log(reverseInPlace(["A", "B", "C"]));