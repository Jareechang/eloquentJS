 function countChar(str, letter){
    var occurence = 0;
    for(var substr of str){
        if (substr.toLowerCase()==letter)
            occurence += 1;
    }
    return occurence;
}

function countBs(str){
    //var occurence = 0;
    //for(var substr of str){
        //if (substr.toLowerCase()=="b")
            //occurence += 1;
    //}
    //return occurence;
    // Refactor to use dynamic method 
    return countChar(str, "b");
}

console.log(countBs('BBC'));
console.log(countChar("kakkerlak", "k"));
