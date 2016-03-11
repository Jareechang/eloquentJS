import ANCESTRY_FILE from './ancestry.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

/**
 * @method filter 
 * filters a given array as first arg and a predicate test
 * as second argument
 *
 * @param {Array} [arr] argument for the function
 * @param {Function} test callback predicate function
 * 
 **/

let filter = (arr,test) => {
   var passed = [];
   for(let i = 0; i < arr.length; i++){
       if(test(arr[i])){
           passed.push(arr[i]);
       }
   }
   return passed;
}

/**   
 *   filterByDate() returns anonymous function
 *   based on input min and max
 *
 *   @param {Number} min
 *   @param {Number} max
 *   @return {Function} a function that determines if person is between 
 *   given born age range
*/

let filterByDate = (min,max) => {
    return (person) => { return person.born > min && person.born < max }
}

// Log individuals born between 1900 and 1925 non-inclusive

console.log(filter(ancestry, filterByDate(1900, 1925)));
