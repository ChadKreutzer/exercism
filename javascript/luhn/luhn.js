class Luhn {
    
    constructor (input) {
        this.valid = test(input);
    }
    
}

const test = (str) => {
    if (/[\d\s]|^\d?$/.test(str)) return false;
    return [...(str.replace(/\s/g, ""))]
        .map((d, i) => {
            d = Number(d);
            if (i % 2) d = (d * 2 <= 9) ? d * 2 : d * 2 - 9;
            return d;
        })
        .reduce((acc, curr) => acc + curr) % 10 === 0;
};

module.exports = Luhn;