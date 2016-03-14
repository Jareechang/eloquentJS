"use strict";

/**
 *  Use reduce method with concat method to "flatten" array
 *  var arrays = [[1,2,3], [4,5], [6]];
 *  // => [1,2,3,4,5,6]
 */

var arrays = [[1, 2, 3], [4, 5], [6]];

var flatten = function flatten(arrays) {
  return arrays.reduce(function (r, arr) {
    return r.concat(arr);
  }, []);
};

console.log(flatten(arrays));