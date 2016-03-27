'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.possibleRoutes = undefined;

var _methods = require('./methods.js');

var _roads = require('./roads.js');

function possibleRoutes(from, to) {
    function findRoutes(route) {
        var notVisited = function notVisited(road) {
            return !(0, _methods.member)(route.places, road.to);
        };
        var continueRoute = function continueRoute(road) {
            return findRoutes({ places: route.places.concat([road.to]),
                length: route.length + road.distance });
        };
        var end = route.places[route.places.length - 1];
        if (end == to) return [route];else return (0, _methods.flatten)((0, _methods.map)(continueRoute, (0, _methods.filter)(notVisited, (0, _roads.roadsFrom)(end))));
    }
    return findRoutes({ places: [from], length: 0 });
}

//show(possibleRoutes("Point Teohotepapapa", "Point Kiukiu").length);
//show(possibleRoutes("Point Teohotepapapa", "Point Kiukiu"));
//show(possibleRoutes("Hanapaoa", "Mt Ootua"));

exports.possibleRoutes = possibleRoutes;