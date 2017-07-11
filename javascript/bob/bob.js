"use strict";

class Bob {
    
    hey(input) {
        
        let isSilence = /^\s*$/.test(input);
        let isQuestion = /\?$/.test(input);
        let isShout = input.toUpperCase() === input && /[a-z]/i.test(input);
        
        switch(true) {
            case isSilence: return "Fine. Be that way!";
            case isShout: return "Whoa, chill out!";
            case isQuestion: return "Sure.";
            default: return "Whatever.";
        }
    }
}

module.exports = Bob;