import { possibleRoutes } from './possible-paths.js';
import { filter } from './methods.js';

function shortestRoute(from,to) {
    return possibleRoutes(from,to)
            .reduce((c,p) => c.length < p.length ? c : p);
}

console.log(shortestRoute("Point Kiukiu", "Point Teohotepapapa").places);
