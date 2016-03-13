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

var reduceAncestor = function(person,f, defaultValue) {
    let getVal = (person) => {
        if(person == null) {
            return defaultValue;
        } else {
            return f(person, getVal(byName[person.mother]), 
                             getVal(byName[person.father]));
        }
    }
    return getVal(person);
}

var sharedDNA = function(person, mother, father) {
    if(person.name == "Pauwels van Haverbeke") {
        return 1;
    } else {
        return (mother + father) / 2;
    }
}

// Check "Philbert Haverbeke" relation to "Pauwel van Haverbeke"

var ph = byName["Philibert Haverbeke"];

console.log(reduceAncestor(ph, sharedDNA, 0) / 4); 
