import ANCESTRY_FILE from './ancestry.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

/**
 * @method map 
 * map method transforms an array by applying the given function supplied
 * to all its elements and building a new array of returned values
 *
 * @param {Array} array - array to apply the transformation
 * @param {Function} transform - transform callback function applied to array
 * elements
 */

var map = (array, transform) => {
    var mapped = [];
    for(let i = 0; i < array.length; i++) {
        mapped.push(transform(array[i]));
    }
    return mapped;
}

/**
 * @method ageGreaterThan 
 * ageGreaterThan method is a higher order function that takes an age 
 * and returns predicate function to ensure the person’s age is greater than
 * the defined age  
 *
 * @param {Number} age - defined age to check against the person object 
 * @return {Function} callback predicate function to check the person’s age 
 * elements
 */

var ageGreaterThan = (age) => {
   return (person) => { return person.died - person.born > age }
}

var overNinety = ancestry.filter(ageGreaterThan(90));

console.log(map(overNinety, person => person.name));
