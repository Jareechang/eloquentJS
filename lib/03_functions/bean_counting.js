"use strict";

function countChar(str, letter) {
    var occurence = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var substr = _step.value;

            if (substr.toLowerCase() == letter) occurence += 1;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return occurence;
}

function countBs(str) {
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