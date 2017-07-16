class Triplet {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    sum () {
        let a = this.a,
            b = this.b,
            c = this.c;
            
        return a + b + c;
    }
    
    product () {
        let a = this.a,
            b = this.b,
            c = this.c;
            
        return a * b * c;
    }
    
    isPythagorean () {
        let a = this.a,
            b = this.b,
            c = this.c;
            
        return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
    }
}

module.exports = Triplet;