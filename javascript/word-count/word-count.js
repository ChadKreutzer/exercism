"use strict";

class Words {
    
    constructor () {
        this.regex = /[a-zà-üа-я]+'?[a-zà-üа-я]|\d/g;
        this.exists = (w) => w && typeof w !== 'function';
    }

    count (string) {
        let count = {},
            wordArr = string.toLowerCase().match(this.regex);

        wordArr.forEach(word => (this.exists(count[word])) ? count[word]++ : count[word] = 1);
        return count;
    }
    
}

module.exports = Words;