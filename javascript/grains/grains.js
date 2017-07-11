"use strict";
 var bigInt = require("./big-integer");
 
 class Grains {
     
     constructor () {
         this.board = fillBoard();
     }
     
     square (num) {
         return `${this.board[num]}`;
     }
     
     total () {
         let sum = 0;
         for (let square in this.board) {
             sum = bigInt(sum).add(this.board[square]);
         }
         return `${sum}`;
     }
 }
 
 const fillBoard = () => {
     let board = {};
     for(let i = 0; i <= 64; i++) {
         board[i] = bigInt(2).pow(i - 1);
     }
     return board;
 };
 
 module.exports = Grains;