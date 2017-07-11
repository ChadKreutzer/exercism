"use strict";

class Isogram {
    
    constructor(input) {
        this.word = input;
    }
    
    isIsogram() {
        let testWord = this.word.toLowerCase().replace(/-|\s/g, "");
        for (var letter in testWord) {
            if (testWord.match(new RegExp(testWord[letter], "g")).length > 1) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Isogram;