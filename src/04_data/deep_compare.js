function isObjectAndNotNull(obj){
    return typeof obj  == "object" && typeof obj != null
}

function keyExist(left,right){
    return !!left && !!right;
}

function matchKey(left,right) {
    return left === right;
}

function deepEqual(left, right){
    var keys = [];
    if(isObjectAndNotNull(left)) {
        keys = keys.concat(Object.keys(left));
    }
    for(let key of keys){
        var leftKey = left[key];
        var rightKey = right[key];
        if(isObjectAndNotNull(leftKey)){
            return deepEqual(leftKey, rightKey);
        }
        return keyExist(leftKey, rightKey) ? 
                matchKey(leftKey,rightKey) : false; 
    }
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
