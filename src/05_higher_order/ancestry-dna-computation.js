import ANCESTRY_FILE from './ancestry.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

/**
 * build an object representing objects by the persons
 * name 
 */ 

var byName = {};

ancestry.forEach((person) => byName[person.name] = person);

// Eldest ancestor 

console.log(byName["Philibert Haverbeke"]);

/**
 * Need to compute the number of father properties @ (1/2^G) 
 * Where G is the number of generation between Pauwels and 
 * Author 
 */


