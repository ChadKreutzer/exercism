"use strict";

const ALLERGENS = [ "eggs", "peanuts", "shellfish", "strawberries",
                    "tomatoes", "chocolate", "pollen", "cats" ];

class Allergies {
    
    constructor (input) {
        this.code = [...(input).toString(2)].reverse();
    }
    
    list () {
        return this.code
            .map((c, i) => Number(c) ? ALLERGENS[i] : false)
            .filter(a => a);
    }
    
    allergicTo (input) {
        return this.list().includes(input);
    }
}

module.exports = Allergies;