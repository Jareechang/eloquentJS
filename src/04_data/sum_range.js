function sum(arr){
    var total = 0;
    // New es6 for...of
    for(var num of arr){
        total += num;
    }
    return total;
}

function range(start, end, step){
    var arr = [];
    var num = start;
    // Check step 
    if(!step){
        step = 1;
    }
    // Reverse the elements 
    if(start > end){
        [start, end] = [end, start];
    }
    // Counts elements
    for(var i = start; i <= end; i++){
        arr.push(num);
        num += step;
    }
    return arr;
}

export { range  };

// Range

//console.log(range(1,10));
//console.log(range(5,2,-1));

// Sum 

//console.log(sum(range(1,10)));
