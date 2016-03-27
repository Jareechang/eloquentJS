'use strict';

var _possiblePaths = require('./possible-paths.js');

var _methods = require('./methods.js');

function shortestRoute(from, to) {
    return (0, _possiblePaths.possibleRoutes)(from, to).reduce(function (c, p) {
        return c.length < p.length ? c : p;
    });
}

console.log((0, _possiblePaths.possibleRoutes)("Point Kiukiu", "Point Teohotepapapa"));
console.log(shortestRoute("Point Kiukiu", "Point Teohotepapapa").places);