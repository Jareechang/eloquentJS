"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function Grid(width, height) {
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
}

Grid.prototype.isInside = function (vector) {
    return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vecotr.y < this.height;
};

Grid.prototype.get = function (vector) {
    return this.space[vector.x + this.width * vector.y];
};

Grid.prototype.set = function (vector, value) {
    this.space[vector.x + this.width * vector.y] = value;
};

exports.Grid = Grid;