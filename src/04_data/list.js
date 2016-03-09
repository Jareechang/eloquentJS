function arrayToList(arr){
    var arrExist = !!arr.length;
    if(arrExist){
        var number = arr.shift();
       return  {
             value: number, 
             rest: arrayToList(arr)  
        }
    }else {
        return null;
    }
}

function listToArray(object){
    var results = [];
    results.push(object.value);
    if(!!object.rest){
        return results.concat(listToArray(object.rest));
    }else {
        return results;
    }
    return results;
}

function prepend(num, rest){
    return {value: num, rest: rest};
}

function nth(list, index){
    var arr = listToArray(list);
    if(!!arr[index]){
        return arr[index];
    }else {
        return null;
    }
}

console.log(arrayToList([10,20,30]));

console.log(listToArray({ value: 10,rest: { value: 20, rest: { value: 30, rest: null  }  } }));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));
