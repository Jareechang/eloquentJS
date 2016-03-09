function isObjectAndNotNull(obj){
    return typeof obj  == "object" && typeof obj != null
}

function deepEqual(left, right){
    // compare key
    var keys = [];
    if(isObjectAndNotNull(left)) {
        keys = keys.concat(Object.keys(left));
    }
    // loop through keys for comparison 
    for(let key of keys){
        // Key exists? 
        var keysExistAndMatching = !!left[key] && !!right[key];
        if(isObjectAndNotNull(left[key])){
            return deepEqual(left[key], right[key]);
        }
        if(keysExistAndMatching){
            // compare value     
            return left[key] === right[key];
        }else {
            return false;
        }
    }
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
