"use strict";

class RLE {
    encode(string) {
        return string.split('').reduce((acc, curr, index, arr) => {
            let count = 1;
            while (curr === arr[index + count]) count++;
            return (acc += acc.substr(-1) !== curr ?
                count > 1 ? count + curr : curr :
                '');
        }, '');
    }

    decode(string) {
        return string
            .split('')
            .map(function(char, index, arr) {
                const isNum = /\d/;
                if (!isNum.test(char)) return char;
                if (!isNum.test(arr[index - 1])) {
                    let count = 1;
                    let num = char;
                    while (isNum.test(arr[index + count])) {
                        num += arr[index + count];
                        count++;
                    }
                    return num;
                }
                return '*';
            })
            .filter(char => char !== '*')
            .reduce((acc, curr, index, arr) => {
                return (acc += Number.parseInt(curr) ?
                    Array(+curr - 1).fill(arr[index + 1]).join('') :
                    curr);
            }, '');
    }
}

module.exports = new RLE();