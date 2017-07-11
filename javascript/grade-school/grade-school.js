"use strict";

class School {
    
    constructor () {
        this.rosterJSON = {};
    }
    
    roster () {
        return this.rosterJSON;
    }
    
    add (name, grade) {
        if (this.rosterJSON[grade]) {
            this.rosterJSON[grade].push(name);
        } else {
            this.rosterJSON[grade] = [name];
        }
        this.rosterJSON[grade] = this.rosterJSON[grade].sort((a, b) => a > b);
    }
    
    grade (num) {
        return this.rosterJSON[num] || [];
    }
}

module.exports = School;