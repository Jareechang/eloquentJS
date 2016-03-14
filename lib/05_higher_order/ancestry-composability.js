"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.average = undefined;

var _ancestry = require("./ancestry.js");

var _ancestry2 = _interopRequireDefault(_ancestry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ancestry = JSON.parse(_ancestry2.default);

/**
 * Higher order function are great when you need to compose
 *  functions 
 */

/**
 * @method average 
 * computes the array given an array of values  
 * 
 * @param {Array} [array] - argument for the function 
 * @return {Number} - the computed average
 *  
 */

//var average = (array) => {
//let plus = (a,b) => a + b;
//return array.reduce(plus) / array.length;
//}

var average = function average(array) {
  var plus = function plus(a, b) {
    return a + b;
  };
  return array.reduce(plus) / array.length;
};

// Transform functions

var age = function age(p) {
  return p.died - p.born;
};
var male = function male(p) {
  return p.sex == "m";
};
var female = function female(p) {
  return p.sex == "f";
};

// Average age of all the males

//console.log(average(ancestry.filter(male).map(age)));

// Average age of all the females

//console.log(average(ancestry.filter(female).map(age)));

exports.average = average;