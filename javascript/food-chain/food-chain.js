"use strict";

class FoodChain {
    
    constructor () {
        this.songJSON = {
            1: { meal:        "fly",
                 exception:   "I don't know why she swallowed the fly. Perhaps she'll die."
            },
            2: { meal:        "spider that wriggled and jiggled and tickled inside her",
                 exclamation: "It wriggled and jiggled and tickled inside her."
            },
            3: { meal:        "bird",
                 exclamation: "How absurd to swallow a bird!"
            },
            4: { meal:        "cat",
                 exclamation: "Imagine that, to swallow a cat!"
            },
            5: { meal:        "dog",
                 exclamation: "What a hog, to swallow a dog!"
            },
            6: { meal:        "goat",
                 exclamation: "Just opened her throat and swallowed a goat!"
            },
            7: { meal:        "cow",
                 exclamation: "I don't know how she swallowed a cow!"
            },
            8: { meal:        "horse",
                 exclamation: "She's dead, of course!"
            }
        };
    }
    
    verse(verseNum) {
        const song = this.songJSON;
        let thisVerse = _currentVerse(verseNum, song);
        
        if (verseNum === 8 || verseNum === 1) return thisVerse;
        
        for (var i = verseNum; i > 1; i-- ) thisVerse+= _why(i, song);
            
        thisVerse+= _why(i, song) + `\n`;
        
        return thisVerse;
    }
    
    verses(start, end){
        let song = "";
        
        for (var i = start; i <= end; i++) song+= this.verse(i) + `\n`;
        
        return song;
    }
}

const _currentVerse = (num, verse) => `I know an old lady who swallowed a ` +
    `${_currentMeal(num, verse)}.\n${verse[num].exception ||
    verse[num].exclamation}\n`;

const _why = (num, verse) => verse[num].exception || `She swallowed the ` +
    `${_currentMeal(num, verse)} to catch the ${verse[num - 1].meal}.\n`;

const _currentMeal = (num, verse) => verse[num].meal.match(/\w+/)[0];

module.exports = FoodChain;