"use strict";

class Gigasecond {
    
    constructor(input){
        this.birthDate = input;
    }
    
    date() {
        let gigasecond = 1000000000000;
        return new Date(this.birthDate.getTime() + gigasecond);
    }
}

module.exports = Gigasecond;