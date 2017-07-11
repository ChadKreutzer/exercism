"use strict";

class Raindrops {

    convert(num) {
        var pling = "";

        if (num % 3 === 0) pling += "Pling";
        if (num % 5 === 0) pling += "Plang";
        if (num % 7 === 0) pling += "Plong";
        return pling || `${num}`;
    }

}

module.exports = Raindrops;
