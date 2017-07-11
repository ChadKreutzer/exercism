"use strict";

class Clock {
    
    constructor (hour, minute) {
        this.time = new Date(2000, 1, 1, hour, minute, 0);
        this.minutes = this.time.getMinutes();
    }
    
    toString () {
        return this.time.toTimeString().slice(0,5);
    }
    
    plus (minutes) {
        this.time.setMinutes(this.minutes + minutes);
        return this;
    }
    
    minus (minutes) {
        this.time.setMinutes(this.minutes - minutes);
        return this;
    }
    
    equals (input) {
        return this.toString() === input.toString();
    }
}

module.exports = {
    at (hours, minutes = 0) {
        return new Clock(hours, minutes);
    }
};
