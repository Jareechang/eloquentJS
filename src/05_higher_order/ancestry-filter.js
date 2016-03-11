import ANCESTRY_FILE from './ancestry.js';

var ancestry = JSON.parse(ANCESTRY_FILE);

// Filter

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
 *   @return {Function} 
*/

let filterByDate = (min,max) => {
    return (person) => { return person.born > min && person.born < max }
}

// Log individuals born between 1900 and 1925 non-inclusive

console.log(filter(ancestry, filterByDate(1900, 1925)));
