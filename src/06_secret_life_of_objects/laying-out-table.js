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

import { TextCell, repeat, colWidths, rowHeights } from './modules.js';

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);
    
    function drawLine(blocks, lineNo) {
        return blocks.map((block) => {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map((cell,colNum) => {
            return cell.draw(widths[colNum], heights[rowNum]);
        })
       
        console.log(blocks[0].map((_,l) => drawLine(blocks, l)));
        return blocks[0].map((_, lineNo) => {
            return drawLine(blocks,lineNo);
        }).join('\n');
    }
    return rows.map(drawRow).join('\n');
}

// 5 x 5 checker board
//
var rows = [];
for(var i = 0; i < 5; i++){
   var row =[];
   for(var j = 0; j < 5; j++){  
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
       if((j+i) % 2 == 0){
           row.push(new TextCell("##"));
       }else {
           row.push(new TextCell("   "));
       }
   }
   rows.push(row);
}

// Basic table
//console.log(drawTable(rows));


/*  Mountains example*/

import MOUNTAINS from './mountains.js';

function UnderLineCell(inner) {
    this.inner = inner;
}

UnderLineCell.prototype.minWidth = function() {
    return this.inner.minWidth();
}

UnderLineCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
}

UnderLineCell.prototype.draw = function(width,height) {
    return this.inner.draw(width, height - 1)
        .concat([repeat("-", width)])
}

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name){
        return new UnderLineCell(new TextCell(name));
    });
    var body = data.map(function(row){
        return keys.map(function(name){
            return new TextCell(String(row[name]));
        })
    })
    return [headers].concat(body);
}

//console.log(dataTable(MOUNTAINS));

console.log(drawTable(dataTable(MOUNTAINS)));
