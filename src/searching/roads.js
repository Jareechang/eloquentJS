//var roads = { 
//"Point KiuKiu": [ {to: "Hanaiapa", distance: 19},
//{to: "Mt Feani", distance: 15},
//{to: "Taaoa" , distance: 15} ] 

//}

var roads = {};

function makeRoad(from, to, length) {
    function addRoad(from,to) {
        if(!(from in roads)) {
            roads[from] = [];
        }
        roads[from].push({to: to, distance: length});
    }
    addRoad(from, to);
    addRoad(to, from);
}

/**
 * @method makeRoads - refined edition of the makeRoad with uneven arugments
 * @param {String} from - starting location 
 * @param {Object} arguments - key, value pairs of ending point
 *
 */

function makeRoads(from) {
    // Shift first argument 
    Array.prototype.shift.call(arguments);
    var locations = arguments
    for(var i = 0; i < locations.length; i += 2) {
        let name = i;
        let length = i + 1;
        makeRoad(from, locations[name], locations[length]);
    }
}

makeRoads("Point Kiukiu", "Hanaiapa", 19,"Mt Feani", 15, "Taaoa", 15);
makeRoads("Airport", "Hanaiapa", 6, "Mt Feani", 5,"Atuona", 4, "Mt Ootua", 11);
makeRoads("Mt Temetiu", "Mt Feani", 8, "Taaoa", 4);
makeRoads("Atuona", "Taaoa", 3, "Hanakee pearl lodge", 1);
makeRoads("Cemetery", "Hanakee pearl lodge", 6, "Mt Ootua", 5);
makeRoads("Hanapaoa", "Mt Ootua", 3);
makeRoads("Puamua", "Mt Ootua", 13, "Point Teohotepapapa", 14);

function show(item) {
    console.log(item);
}

function roadsFrom(place) {
    var found = roads[place];
    if(found == undefined)
        throw new Error(`No place named '${place} found.'`);
    else
        return found;
}

//show(roads);

export { show, roads, makeRoad, makeRoads, roadsFrom };
