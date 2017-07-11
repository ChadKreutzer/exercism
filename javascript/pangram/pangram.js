"use strict";

class Pangram {
    
    constructor(input) {
        const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
        this.sentence = input.toLowerCase();
        this.abcReg = alphabet.map(letter => new RegExp(letter));
    }
    
    isPangram() {
        return this.abcReg.every(letter => letter.test(this.sentence));
    }
}

module.exports = Pangram;