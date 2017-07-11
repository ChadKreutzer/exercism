"use strict";

class Triangle {
    
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    kind () {
        let a = this.a,
            b = this.b,
            c = this.c;
            
        if (isValid(a, b, c)) {
            switch (true) {
                case (a === b && b === c): return "equilateral";
                case (a === b || b === c || a === c): return "isosceles";
                default: return "scalene";
            }
        } else {
            throw new Error("Not a valid triangle");
        }
    }
}


const isValid = (a, b, c) => {
    return (Math.abs(a - b) < c && c < (a + b)) && [a, b, c].every(x => x > 0);
};


module.exports = Triangle;