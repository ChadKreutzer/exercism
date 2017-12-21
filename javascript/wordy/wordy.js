"use strict";

const OPERATORS = {'plus':'+', 'minus':'-', 'divided':'/', 'multiplied':'*'};
Object.freeze(OPERATORS);
const ArgumentError = function() {};

class WordProblem {
  
  constructor(input){
    this.problem = strip(input);
  }
  answer(){
    try {
      return eval(this.problem);
    }
    catch(e) {
      console.log(e);
      throw new ArgumentError();
    }
  }
}

function strip(problem) {
  return problem
    .replace(/What is |by |\?/g, "")
    .split(" ")
    .map(piece => (Object
          .keys(OPERATORS)
          .some(operator => piece === operator)) ? OPERATORS[piece] : piece)
    .map(piece => (piece[0] === "-" && piece.length > 1) ? `(${piece})` : piece)
    .map((piece, i) => (i === 0 || i === 2) ? (i ===0) ? `(${piece}` : `${piece})` : piece)
    .join("");
}

module.exports = {
  WordProblem: WordProblem,
  ArgumentError: ArgumentError
};