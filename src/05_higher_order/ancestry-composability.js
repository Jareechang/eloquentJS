import ANCESTRY_FILE from './ancestry.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

/**
 * Higher order function are great when you need to compose
 *  functions 
 */

/**
 * @method average 
 * computes the array given an array of values  
 * 
 * @param {Array} [array] - argument for the function 
 * @return {Number} - the computed average
 *  
 */

//var average = (array) => {
    //let plus = (a,b) => a + b;
    //return array.reduce(plus) / array.length;
//}

var average = function(array) {
    let plus = (a,b) => a + b;
    return array.reduce(plus) / array.length;
}

// Transform functions 

var age = (p) => p.died - p.born; 
var male = (p) => p.sex == "m"; 
var female = (p) => p.sex == "f";

// Average age of all the males

//console.log(average(ancestry.filter(male).map(age)));

// Average age of all the females 

//console.log(average(ancestry.filter(female).map(age)));

export {average};
