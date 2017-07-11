"use strict";

class BeerSong {
    
    verse(number) {
        return _printVerse(number);
    }
    
    sing(first) {
        const final = arguments[1] || 0;
        let song = "";
        for (var i = first; i > final; i--) {
            song += _printVerse(i) + `\n`;
        }
        return song += _printVerse(final);
    }
}

const _printVerse = (verse) => {
    const bottle_s = (num) => (num === 1) ? "bottle" : "bottles";
    const left = (verse > 1) ? verse - 1 : "no more";
    
    if (verse) {
        return `${verse} ${bottle_s(verse)} of beer on the wall, ${verse} ` +
            `${bottle_s(verse)} of beer.\nTake ${(verse > 1) ? "one" : "it"} ` +
            `down and pass it around, ${left} ${bottle_s(left)} of beer on ` +
            `the wall.\n`;
    }
    return `No more bottles of beer on the wall, no more bottles of beer.\n` +
        `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
};

module.exports = BeerSong;