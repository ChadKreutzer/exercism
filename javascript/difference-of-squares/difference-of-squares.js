"use strict";

class Squares {
    
    constructor (num) {
        this.squareOfSums = squareOfSums(num);
        this.sumOfSquares = sumOfSquares(num);
        this.difference = this.squareOfSums - this.sumOfSquares;
    }
}

const squareOfSums = num => Math.pow(num, 2) * Math.pow(num + 1, 2) / 4;
const sumOfSquares = num => num * (num + 1) * (2 * num + 1) / 6;

module.exports = Squares;