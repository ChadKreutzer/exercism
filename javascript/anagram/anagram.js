"use strict";

class Anagram {
    
    constructor(input) {
        this.word = input;
    }
    
    matches(list) {
        const arr = (Array.isArray(list)) ? list : [...arguments];
        const prep = (word) => word.split("").sort((a,b) => a < b).join("");
        let source = this.word.toLowerCase();
        
        return arr.filter(element => {
            let test = element.toLowerCase();
            return source !== test && prep(source) === prep(test);
        });
    }
}

module.exports = Anagram;