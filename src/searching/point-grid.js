function show(result) {
    console.log(result);
}

function point(x, y) {
      return {x: x, y: y};
}

function addPoints(a, b) {
      return point(a.x + b.x, a.y + b.y);
}

function takeDifference(a,b) {
      return point(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
}

function samePoint(a, b) {
      return a.x == b.x && a.y == b.y;
}

function notTheSamePoint(a,b) {
    return !samePoint(a,b);
}

function square(num) {
    return Math.pow(2,num);
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

/* pythagorean distance calc*/
//function estimatedDistance(pointA, pointB) {
    //var netPoint = takeDifference(pointA, pointB);
    //return Math.sqrt(square(netPoint.x)*100 + square(netPoint.y) *100);
//}

/* optimistic distance esitmate */

// Useful for recentangles 

function estimatedDistance(pointA, pointB) {
    var netPoint = takeDifference(pointA, pointB);
    var dx = netPoint.x;
    var dy = netPoint.y;
        if (dx > dy)
            return (dx - dy) * 100 + dy * 141;
        else
            return (dy - dx) * 100 + dx * 141;

}

show(estimatedDistance(point(1,1), point(2,3)));

//show(possibleDirections(point(0, 0)));

export { possibleDirections };
