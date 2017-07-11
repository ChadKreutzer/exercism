"use strict";

class CircularBuffer {
    
    constructor (input) {
        this.buffer = [];
        this.size = input;
        this.full = (arr) => arr.length === input;
    }
    
    read () {
        try {
            return this.buffer.shift();
        } catch (e) {
            throw bufferEmptyException();
        }
    }
    
    clear () {
        this.buffer = [];
    }
    
    write (input) {
        if (this.full(this.buffer)) throw bufferFullException();
        input && this.buffer.push(input);
    }
    
    forceWrite (input) {
        if (this.full(this.buffer)) this.buffer.shift();
        this.write(input);
    }
    
}

const bufferEmptyException = () => `Buffer is Empty`;
const bufferFullException = () => `Buffer is Full`;

module.exports = {
    circularBuffer(input) { return new CircularBuffer(input); },
    bufferEmptyException: bufferEmptyException,
    bufferFullException:  bufferFullException
};

