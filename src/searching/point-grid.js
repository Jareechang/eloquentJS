function show(result) {
    console.log(result);
}

function point(x, y) {
      return {x: x, y: y};
}

function addPoints(a, b) {
      return point(a.x + b.x, a.y + b.y);
}

function samePoint(a, b) {
      return a.x == b.x && a.y == b.y;
}

function notTheSamePoint(a,b) {
    return !samePoint(a,b);
}

//show(samePoint(addPoints(point(10, 10), point(4, -2)),
                             //point(14, 8)));

function possibleDirections(from) {
    var mapSize = 20;
    var pointTransforms = [point(-1,0), point(-1,1), point(-1,-1),
                           point(0,1), point(0,0), point(0,-1),
                           point(1,1), point(1,0), point(1,-1)];

    function withinMap(point) {
        return point.x < mapSize && point.y < mapSize &&
                point.x >= 0 && point.y >= 0;
    }

    function transformAndFilter(point) {
        var paths = [];
        for(var transform of pointTransforms) {
            var newPoint = addPoints(point,transform);
            if(withinMap(newPoint) && notTheSamePoint(point, newPoint))  {
                paths.push(newPoint);
            }
        }
        return paths;
    }

    return transformAndFilter(from);
}

show(possibleDirections(point(0, 0)));
