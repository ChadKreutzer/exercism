"use strict";

class ETL {
    
    transform (oldData) {
        var newData = {};
        for (let score in oldData) {
            oldData[score].forEach(value => {
                newData[value.toLowerCase()] = parseInt(score, 10);
            });
        }
        return newData;
    }
}

module.exports = ETL;