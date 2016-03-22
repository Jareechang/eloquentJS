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
            return Math.max(max,row[i].minWidth());
        },0)
    })
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
       result.push(line + repeat(" ", width - line.length));
   }
   return result;
}

export { 
    repeat,  
    rowHeights,
    colWidths,
    TextCell
}
