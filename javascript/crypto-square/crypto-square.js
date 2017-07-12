"use strict";

class Crypto {

    constructor (input) {
        this.plain = input;
    }

    normalizePlaintext () {
        return this.plain.toLowerCase()
            .replace(/(\W|\s)/g, "");
    }

    size () {
        let length = this.normalizePlaintext().length;
        return Math.ceil(Math.sqrt(length));
    }

    plaintextSegments() {
        let chunk = this.size(),
            text = this.normalizePlaintext(),
            regex = new RegExp(`(\\w{${chunk}})`, `g`);
        
        return text.replace(regex, `$1 `)
            .trim()
            .split(" ");
    }

    ciphertext() {
        let segments = this.plaintextSegments(),
            cipher = [];
            console.log(segments);
        
        return segments.reduce((a, s) => a.forEach((l, i) => l+= s[i] || " "), [...a]);
        
    }
}

module.exports = Crypto;