"use strict";

class DnaTranscriber {
    
    constructor() {
        this.CODE = {G: "C", C: "G", T: "A", A: "U"};
    }
    
    toRna(dna) {
        const dnaArr = dna.split("");
        if (dnaArr.every(element => /G|C|T|A/.test(element))) {
            return dnaArr.map(base => this.CODE[base]).join('');
        } else {
            throw new Error("Invalid input");
        }
    }
}

module.exports = DnaTranscriber;