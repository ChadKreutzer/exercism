class Octal {
    
    constructor (input) {
        this.octal = input;
        this.invalid = /[^0-7]/.test(input);
    }
    
    toDecimal () {
        return this.invalid ? 0 : [...this.octal]
            .reverse()
            .map((d, i) => +d * Math.pow(8, i))
            .reduce((a, b) => a + b);
    }
    
}

module.exports = Octal;