import ANCESTRY_FILE from './ancestry.js';

import {average} from './ancestry-composability.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

/**
 *  compute the average age difference between mothers and childrens
 */

var byName = {};
ancestry.forEach(p => byName[p.name] = p);

var ageDiff = p => p.born - byName[p.mother].born;
var hasMother = p => !! p.mother && !! byName[p.mother];

console.log(average(ancestry.filter(hasMother).map(ageDiff)));

