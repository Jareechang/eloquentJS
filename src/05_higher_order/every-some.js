/**
 * @method every 
 * test if every item in array passes the predicate test 
 * then return true if conditions passes else false
 *
 * @param {Array} [arr]  - argument for the function
 * @param {Function} test - callback predicate function
 * 
 */

var every = function(array, predicate){
    let res = null;
    for(let item of array){
        let testPasses =  predicate(item);
        testPasses ? res = true : res = false;
    }   
    return res;
}

console.log(every([NaN, NaN, NaN], isNaN));

/**
 * @method some 
 * test if some item in array passes the predicate test 
 * then return true if conditions passes else false
 *
 * @param {Array} [arr]  - argument for the function
 * @param {Function} test - callback predicate function
 * 
 */

var some = function(array, predicate) {
    let res = null;
    for(let item of array){
        let testPasses =  predicate(item);
        if(testPasses) {
            return true;
        } else {
            res = false;
        }
    }   
    return res;
}

console.log(some([5, 3, 4], isNaN));

