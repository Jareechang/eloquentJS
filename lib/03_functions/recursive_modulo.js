"use strict";

function isEven(num) {
    // Add statement to reverse sign of num
    num = Math.abs(num);
    if (num == 0) {
        return true;
    } else if (num < 0) {
        return false;
    }
    num -= 2;
    // NOTE: Remember to return the recursive function from the main function
    return isEven(num);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));