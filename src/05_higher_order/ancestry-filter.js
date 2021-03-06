import ANCESTRY_FILE from './ancestry.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

/**
 * @method filter 
 * filters a given array as first arg and a predicate test
 * as second argument
 *
 * @param {Array} [arr]  - argument for the function
 * @param {Function} test - callback predicate function
 * 
 */

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
 *  @method filterByDate
 *  returns anonymous function based on input min and max
 *
 *  @param {Number} min - set minimum bound for birth date 
 *  @param {Number} max - set maximum bound for birth date
 *  @return {Function} a function that determines if person is between 
 *   given born age range
*/

let filterByDateBetween = (min,max) => {
    return (person) => { return person.born > min && person.born < max }
}

/**
 *  @method hasFather
 *  a predicate function that matches father's name to "Carel Haverbeke"
 *
 *  @param {Object} person - the person object within the scope 
 *  @return {Boolean} matches father’s name to "Carel Haverbeke" 
 */

let hasFather = (person) => {
    return person.father == "Carel Haverbeke";
}

// Log individuals born between 1900 and 1925 non-inclusive

console.log(filter(ancestry, filterByDateBetween(1900, 1925)));

// Log indivduals with fathers matching name "Carel Haverbeke" 

console.log(ancestry.filter(hasFather));
