"use strict";

// "30-1-2003"
function findDate(string) {
    var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    var match = dateTime.exec(string);
    // Note Javascript's date convention of 0 - 11 for months
    return new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
}

console.log(findDate("30-1-2003"));