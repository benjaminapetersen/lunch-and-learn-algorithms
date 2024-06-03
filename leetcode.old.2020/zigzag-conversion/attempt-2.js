const assert = require("../assert");

const newGrid = (numRows) => {
  let grid = [];
  let rowIndexer = 0;
  // brute force. 
  while(rowIndexer < numRows) {
    grid.push([]);
    rowIndexer++
  };
  return grid; 
}

const buildStringFromGrid = (grid) => {
  let s = '';
  grid.forEach((row) => {
    row.forEach((column) => {
      if(column) {
        s += column;
      }
    });
  });
  return s;
}

// s string
// numRows number of rows
var convert = function(s, numRows) {
  let grid = newGrid(numRows);
  let chars = s.split('');
  
  // for simplicity, we can set numRows to be 0 based like arrays
  numRows = numRows -1;

  // 0,0 = P // column is 0, row increases
  // 1,0 = A
  // 2,0 = Y // numRows hit, col set to max
  // 1,1 = P // row increases, column decreases, to column == x, stays x
  // array index.
  let rowIndex = 0;
  let colIndex = 0;
  // if false, we zigzag
  let fillColumn = true;
  for(let charsIndex = 0; charsIndex < chars.length; charsIndex++) {    
    // populate grid
    grid[rowIndex][colIndex] = chars[charsIndex];
    // go to next row
    rowIndex++

    // stay in this column
    if(rowIndex === numRows) {
      fillColumn = false; 
      colIndex = numRows;      
    } else if (rowIndex === 0) {
      fillColumn = true;      
    }
    
    // we are done with this iteration
    if (fillColumn) {
      continue;
    }

    // if not fill column, time to zigzag
    // decrement colIndex, for next pass
    colIndex--;

    // exit when we hit the last character
    if(charsIndex + 1 === chars.length) {
      break;
    }
  }
  return buildStringFromGrid(grid);
};


// Example 1:
//   Input: s = "PAYPALISHIRING", numRows = 3
//   Output: "PAHNAPLSIIGYIR"
//   P   A   H   N
//   A P L S I I G
//   Y   I   R
// Example 2:
//   Input: s = "PAYPALISHIRING", numRows = 4
//   Output: "PINALSIGYAHRPI"
//   P     I    N
//   A   L S  I G
//   Y A   H R
//   P     I
assert.equals(
  convert('PAYPALISHIRING', 3),
  'PAHNAPLSIIGYIR'
  );

assert.equals(
  convert('PAYPALISHIRING', 4),
  'PINALSIGYAHRPI'
  );