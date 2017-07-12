"use strict";

class Trinary {
    
    constructor (input) {
        this.trinary = input;
        this.invalid = /[^210]/.test(input);
    }
    
    toDecimal () {
        return this.invalid ? 0 : [...this.trinary]
            .reverse()
            .map((d, i) => +d * Math.pow(3, i))
            .reduce((a, b) => a + b);
    }
    
}

module.exports = Trinary;