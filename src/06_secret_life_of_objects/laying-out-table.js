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

function rowHeights(rows) {
    return rows.map( (row) => {
        return row.reduce((max,cell) => {
            return Math.max(max,cell.minHeight());
        },0)
    })
}

function colWidths(rows) {
    return rows[0].map( (_, i) => {
        return rows.reduce((max,row) => {
            console.log(`max: ${max}, row: ${row}`);
            return Math.max(max,row[i].minWidth());
        },0)
    })
}

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
            return cell.draw(widths[colNum], heights[rowNum])
        })
        
        return blocks[0].map((_, lineNo) => {
            return drawLine(blocks,lineNo);
        }).join('\n');
    }

    return rows.map(drawRow).join('\n');
}

function repeat(string,times) {
    var results ="";
    for(var i =0; i < times; i++){
        results += string;
    }
    return results;
}

function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce((width,line) => {
        return Math.max(width, line.length);
    }, 0);
}

TextCell.prototype.minHeight = function() {
    return this.text.length;
}

TextCell.prototype.draw = function(width, height) {
   var result =[];
   for(var i =0; i<height; i++) {
       var line = this.text[i] || "";
       result.push(line + repeat("", width - line.length));
       console.log(result);
   }
   return result;
}

// 5 x 5 checker board
//
var rows = [];
for(var i = 0; i < 5; i++){
   var row =[];
   for(var j = 0; j < 5; j++){  
       if((j+i) % 2 == 0){
           row.push(new TextCell("##"));
       }else {
           row.push(new TextCell("   "));
       }
   }
   rows.push(row);
}

console.log(drawTable(rows));
