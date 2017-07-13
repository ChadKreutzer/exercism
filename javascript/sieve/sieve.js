class Sieve {
    
    constructor (input) {
        this.array = Array.from(Array(input - 1), (x,i) => i + 2);
        this.primes = sieve(this.array);
    }

}

const sieve = (arr) => {
    let primes = [];
    while (arr.length) {
        primes.push(arr[0]);
        arr = arr.filter(n => n % arr[0]);
    }
    return primes;
};

module.exports = Sieve;