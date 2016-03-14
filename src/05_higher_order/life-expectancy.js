import ANCESTRY_FILE from './ancestry.js';

import {average} from './ancestry-composability.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

var byCentury = {};

var isArray = (arr) => arr instanceof Array;
var insertValue = (k,v) => byCentury[k].push(v);

var groupBy = function(pluck = null,p) {
    let century = Math.ceil(p.died/100);
    let arrayExist = isArray(byCentury[century]);
    let arrayDoesntExist = !arrayExist;
    if(arrayDoesntExist){
        byCentury[century] = [];
    }
    !!pluck ? insertValue(century,pluck(p)) : insertValue(century,p);
}

// Bind an optional callback to pluck the life expectancy in groupBy function

ancestry.forEach(groupBy.bind(null, p => p.died - p.born));

var averageAgebyCentury = Object.keys(byCentury)
                                .map(function(c) {  
                                    return { c : Number(average(byCentury[c]).toFixed(2)) } 
                                 })

console.log(averageAgebyCentury);
