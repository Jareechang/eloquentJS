import { flatten, map, member, filter} from './methods.js';
import { show, roads, makeRoad, makeRoads, roadsFrom } from './roads.js';

function possibleRoutes(from,to) {
    function findRoutes(route) {
        var notVisited = (road) => !member(route.places, road.to);
        var continueRoute = (road) => {
            return findRoutes({ places: route.places.concat([road.to]), 
                              length: route.length + road.distance });
        }        
        var end = route.places[route.places.length - 1];
        if(end == to)
            return [route];
        else 
            return flatten(map(continueRoute, filter(notVisited, roadsFrom(end))));
    }
    return findRoutes({places: [from], length: 0});
}

//show(possibleRoutes("Point Teohotepapapa", "Point Kiukiu").length);
//show(possibleRoutes("Point Teohotepapapa", "Point Kiukiu"));
//show(possibleRoutes("Hanapaoa", "Mt Ootua"));

export { possibleRoutes };
