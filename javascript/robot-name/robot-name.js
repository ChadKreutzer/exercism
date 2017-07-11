"use strict";

const USEDNAMES = {};

const generateName = () => {
    let newName = buildName();
    
    while(USEDNAMES[newName]) {
      newName = buildName();
    }
    
    USEDNAMES[newName] = true;
    return newName;
};

const buildName = () => {
    let L = () => random("letter"),
        N = () => random("digit");
    
    return String.fromCharCode(L(),L(),N(),N(),N());
};

const random = (type) => {
    const data = {
        "letter": { "range": 26, "offset": 65 },
        "digit":  { "range": 10, "offset": 48 }
    };
    
    return parseInt((Math.random() * data[type].range) + data[type].offset, 10);
};

class Robot {
    
    constructor () { this.name = generateName(); }
    
    reset () { this.name = generateName(); }
    
}

module.exports = Robot;
