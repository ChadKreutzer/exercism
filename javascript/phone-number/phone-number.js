"use strict";

class PhoneNumber {
    
    constructor(input) {
        this.cleanNumber = _cleanNumber(input);
    }
    
    number() {
        return this.cleanNumber;
    }
    
    areaCode() {
        if (this.cleanNumber != "0000000000") {
            return this.cleanNumber.slice(0, 3);
        }
    }
    
    toString() {
        const code = this.cleanNumber.slice(0, 3),
              exchange = this.cleanNumber.slice(3, 6),
              subscriber = this.cleanNumber.slice(6);
              
        return `(${code}) ${exchange}-${subscriber}`;
    }
}

const _cleanNumber = (raw) => {
    const invalid = "0000000000";
    let number = raw.replace(/\D/g, "");
    
    switch(number.length) {
        case 10: return number;
        case 11: return (number[0] === "1") ? number.slice(1) : invalid;
        default: return invalid;
    }
};

module.exports = PhoneNumber;