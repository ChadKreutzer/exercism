"use strict";

class Hamming {
  
  compute(strand1, strand2) {
    if(strand1.length !== strand2.length) {
      throw new Error("DNA strands must be of equal length.");
    }
    
    var hammingNumber = 0;
    for (var i in strand1) {
      if (strand1[i] !== strand2[i]) hammingNumber++;
    }
    return hammingNumber;
  }
}

module.exports = Hamming;
