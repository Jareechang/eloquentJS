import ANCESTRY_FILE from './ancestry.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

/**
 * @method reduce
 * reduce an array, and reduces/"folds" the array one element
 * at a time
 * 
 * @param {Array} array - initial array 
 * @param {Function} combine - function which combines 
 * the previous and last element
 * @param {Number} start - starting value for the reduce
 */

var reduce = (array, combine, start) => {
    var current = start;
    for(let i=0; i < array.length; i++) {
        current = combine(current,array[i]);
    }
    return current;
}

// Basic example with numbers

console.log(reduce([1,2,3,4], (a,b) => a + b, 0));

// Most known ancient Ancestor

console.log(ancestry.reduce(
    (curr, min) => {
        if(curr.born < min.born) return curr;
        else return min;
    })
)
