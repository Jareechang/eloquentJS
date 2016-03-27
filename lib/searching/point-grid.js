"use strict";

function show(result) {
    console.log(result);
}

function point(x, y) {
    return { x: x, y: y };
}

function addPoints(a, b) {
    return point(a.x + b.x, a.y + b.y);
}

function samePoint(a, b) {
    return a.x == b.x && a.y == b.y;
}

function notTheSamePoint(a, b) {
    return !samePoint(a, b);
}

//show(samePoint(addPoints(point(10, 10), point(4, -2)),
//point(14, 8)));

function possibleDirections(from) {
    var mapSize = 20;
    var pointTransforms = [point(-1, 0), point(-1, 1), point(-1, -1), point(0, 1), point(0, 0), point(0, -1), point(1, 1), point(1, 0), point(1, -1)];

    function withinMap(point) {
        return point.x < mapSize && point.y < mapSize && point.x >= 0 && point.y >= 0;
    }

    function transformAndFilter(point) {
        var paths = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = pointTransforms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var transform = _step.value;

                var newPoint = addPoints(point, transform);
                if (withinMap(newPoint) && notTheSamePoint(point, newPoint)) {
                    paths.push(newPoint);
                }
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

        return paths;
    }

    return transformAndFilter(from);
}

show(possibleDirections(point(0, 0)));