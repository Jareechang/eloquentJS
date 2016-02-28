"use strict";

var _data = require("./04_data.js");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasEvent(event, entry) {
    return !! ~entry.events.indexOf(event);
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i],
            index = 0;
        if (hasEvent(event, entry)) {
            // Has entry, shift index by 1
            index += 1;
        }
        if (entry.squirrel) {
            // is Squirel, shift index by 2
            index += 2;
        }
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", _data2.default));