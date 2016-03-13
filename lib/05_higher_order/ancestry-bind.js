"use strict";

var _ancestry = require("./ancestry.js");

var _ancestry2 = _interopRequireDefault(_ancestry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ancestry = JSON.parse(_ancestry2.default);

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person) {
    return !! ~set.indexOf(person.name);
}

// Without bind

console.log(ancestry.filter(function (p) {
    return isInSet(theSet, p);
}));

// With bind

console.log(ancestry.filter(isInSet.bind(null, theSet)));