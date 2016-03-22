'use strict';

var _modules = require('./modules.js');

var _mountains = require('./mountains.js');

var _mountains2 = _interopRequireDefault(_mountains);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function drawTable(rows) {
    var heights = (0, _modules.rowHeights)(rows);
    var widths = (0, _modules.colWidths)(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function (block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function (cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });

        console.log(blocks[0].map(function (_, l) {
            return drawLine(blocks, l);
        }));
        return blocks[0].map(function (_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join('\n');
    }
    return rows.map(drawRow).join('\n');
}

// 5 x 5 checker board
//
/**
 *  Laying out table interface
 *   
 *   Interface: 
 *
 *   • minHeight() - returns number indicating miniimum height of this Cell
 *
 *   • minWidth() - returns number indicating mininimum width of this Cell
 *   
 *   • draw(width,height) - returns an array of length height which contains
 *   a series of strings that are each width character wide. This represent the content
 *   of the Cells
 */

// Import modules

var rows = [];
for (var i = 0; i < 5; i++) {
    var row = [];
    for (var j = 0; j < 5; j++) {
        /**
         *  Push TextCell data into @param row {Array}  
         *
         *  ex  [TextCell]
         *
         *  @param TextCell {Object} > {Array} > {String} - Object who is an Array containg String  
         *
         *   ex TextCell > { text: ["##"] } 
         *
         *  @param rows {Array} - Array holding array of TextCells
         *
         *  ex [ [TextCell], ... [TextCell] ]
         */
        if ((j + i) % 2 == 0) {
            row.push(new _modules.TextCell("##"));
        } else {
            row.push(new _modules.TextCell("   "));
        }
    }
    rows.push(row);
}

// Basic table
//console.log(drawTable(rows));

/*  Mountains example*/

function UnderLineCell(inner) {
    this.inner = inner;
}

UnderLineCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};

UnderLineCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1;
};

UnderLineCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height - 1).concat([(0, _modules.repeat)("-", width)]);
};

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function (name) {
        return new UnderLineCell(new _modules.TextCell(name));
    });
    var body = data.map(function (row) {
        return keys.map(function (name) {
            return new _modules.TextCell(String(row[name]));
        });
    });
    return [headers].concat(body);
}

//console.log(dataTable(MOUNTAINS));

console.log(drawTable(dataTable(_mountains2.default)));