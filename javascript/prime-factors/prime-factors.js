"use strict";

class PrimeFactors {
    
    for(num) {
        return factors(num);
    }

}

const factors = num => {
    let factorArr = [],
        last = num,
        factor = 2;
        
    while (last >= factor) {
        if (last % factor === 0) {
            factorArr.push(factor);
            last/= factor;
        
        } else {
            factor++;
        }
    }
    return factorArr;
};

module.exports = PrimeFactors;