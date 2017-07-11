//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

"use strict";

class Year {
  
  constructor (input) {
    this.year = input;
  }
  
  isLeap () {
    const isLeap400 = this.year % 400 === 0;
    const isLeapOther = this.year % 4 === 0 && this.year % 100;
    return (isLeap400 || isLeapOther) ? true : false;
  }
  
}

module.exports = Year;
