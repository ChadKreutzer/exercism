"use strict";

class Binary {
    
    constructor (input) {
        this.binary = input;
        this.invalid = /[^10]/.test(input);
    }
    
    toDecimal () {
        return this.invalid ? 0 : [...this.binary]
            .reverse()
            .map((d, i) => +d * Math.pow(2, i))
            .reduce((a, b) => a + b);
    }
    
}

module.exports = Binary;