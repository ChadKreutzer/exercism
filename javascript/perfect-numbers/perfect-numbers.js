"use strict";

class PerfectNumbers {
    
    classify (input) {
        if (input <= 0) return "Classification is only possible for natural numbers.";
        
        let aliquot = sumOf(factorsOf(input));
        
        switch (true) {
            case input === 1 || aliquot < input: return "deficient";
            case aliquot === input: return "perfect";
            case aliquot > input: return "abundant";
            default: return "I don't know how you got here but congratulations.";
        }
    }
    
}

const sumOf = arr => arr.reduce((a, b) => a + b);

const factorsOf = int => {
    let numArr = [1],
	    lastNum = Math.sqrt(int);
	    
	for (let i = 2; i <= lastNum; i++) {
		if (int % i === 0) {
		    lastNum = int / i;
			newFactor(numArr, i) && numArr.push(i);
			newFactor(numArr, lastNum) && numArr.push(lastNum);
		}
	}
	return numArr;
};

const newFactor = (arr, num) => arr.indexOf(num) === -1;

module.exports = PerfectNumbers;