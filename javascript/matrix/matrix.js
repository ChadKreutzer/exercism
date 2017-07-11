"use strict";

class Matrix {
    
    constructor (input) {
        this.rows = [];
        this.columns = [];
        
        const matrix = input.match(/\d+/g);
        const rows = input.match(/\n/g).length + 1;
        const cols = matrix.length / rows;
        
        const rowParse = x => matrix.filter((n,i) => {
          if(i >= (x * cols) && i < ((x * cols) + cols)){
            return n;
          }
        }).map(n => parseInt(n, 10));
        
        const colParse = x => {
          let n = [];
          for (var i = x; i < matrix.length; i += cols)  {
            n.push(parseInt(matrix[i], 10));
          }
          return n;
        };
        
        for (let i = 0; i < rows; i++) this.rows.push(rowParse(i));
        for (let i = 0; i < cols; i++) this.columns.push(colParse(i));
    }
    
}

module.exports = Matrix;