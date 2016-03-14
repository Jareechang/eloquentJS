/**
 *  Use reduce method with concat method to "flatten" array
 *  var arrays = [[1,2,3], [4,5], [6]];
 *  // => [1,2,3,4,5,6]
 */

var arrays = [[1,2,3], [4,5], [6]];

var flatten = function(arrays) {
    return arrays.reduce((r,arr) => r.concat(arr), []);
}

console.log(flatten(arrays));


