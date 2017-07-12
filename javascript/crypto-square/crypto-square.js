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
        let segments = this.plaintextSegments();
        
        return segments.map(b => [...b])
            .reduce((acc, curr) => acc.map((l, i) => l + (curr[i] || "")))
            .join("");
        
    }
}

module.exports = Crypto;