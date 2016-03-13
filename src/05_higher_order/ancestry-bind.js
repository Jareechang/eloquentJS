import ANCESTRY_FILE from './ancestry.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

var theSet = ["Carel Haverbeke", "Maria van Brussel","Donald Duck"];

function isInSet(set, person) {
    return !!~set.indexOf(person.name);
}

// Without bind

console.log(ancestry.filter(p => isInSet(theSet,p)))

// With bind

console.log(ancestry.filter(isInSet.bind(null, theSet)));
