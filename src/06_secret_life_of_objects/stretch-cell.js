// Import modules

import { TextCell, repeat, colWidths, rowHeights } from './modules.js';

// Implemetation of Stretch Cell

function StretchCell(inner, width,height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}


StretchCell.prototype.minHeight = function() {
    var calcMinHeight = this.inner.minHeight();
    return this.height > calcMinHeight ? this.height :
                                         calcMinHeight;
}

StretchCell.prototype.minWidth = function() {
    var calcMinWidth = this.inner.minWidth();
    return this.width > calcMinWidth ? this.width :
                                         calcMinWidth;
}

StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width,height);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());

console.log(sc.draw(3, 2));
