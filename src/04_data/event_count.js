import JOURNAL from "./04_data.js";

function hasEvent(event, entry){
    return !!~ entry.events.indexOf(event);
}

/*
 *  Note: Phi notation for correlation  
 *    
 *     formula = n11 * n00 - n10 * n01/ sqrt( n1• * n•0 * n•1 * n•0 )
 *
 *     n10:  number of measurements where the first variable (squirrelness) is false (0)
 *           and second variable (pizza) is true (1)
 *
 *     n1•:  refer to all the measurements where first variable is true 
 *  */

function tableFor(event, journal){
    var table = [0,0,0,0];
    for(var i = 0; i < journal.length; i ++){
        var entry = journal[i],index = 0;
        if(hasEvent(event,entry)){
            index += 1;
        }
        if(entry.squirrel){
            index += 2;
        }
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));
