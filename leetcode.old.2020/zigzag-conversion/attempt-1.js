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
  // // array, with numRows of child arrays  
  // let result = [[],[],[],/*...*/];

  // // this is kind of terrible...
  // // we don't need this step, probably, just outlining the task at hand.
  // // let chars = [].map.call(s, (char) => char);
  // let chars = s.split(''); // split on empty string. heh. dummy.
  
  // Example 1: pattern
  //  a.0, b.0, c.0
  //  b.1
  //  a.2, b.2, c.2
  //  b.3
  //  a.4, b.4, c.4
  //  b.5
  //  a.6, b.6, c.6
  //  b.7
  //
  // Example 2: pattern
  //  a.0, b.0, c.0, d.0
  //  c.1
  //  b.2 
  //  a.3, b.3, c.3, d.3
  //  c.4
  //  b.5
  //  a.6, b.6, c.6, d.6
  //  c.7
  //  b.8
  //  a.9, b.9, c.9, d.9
  //
  // Abstracted
  //  fill column to numRows, to represent a full column (3)
  //  increment forward 1 index, subtract 1 level,
  //    loop, until back to bottom array
  //
  // clarify
  // start outer array index 0
  //   do the first column insert
  //     work up up to outer array index[numRows] (last array)
  //       insert letter at outerArray[0][0]
  //       up to outerArray[numRows][0]
  // then 
  //   do the zigzag insert
  //     move forward 1 column via outerArray[numRows -1][numRows -1]
  //     move forward 1 column via outerArray[numRows -2][currentCol +1]
  //     etc, until back to outerArray[0][currentRow + n]
  //
  // so...
  // when at outerArray[0]
  //  fill each array at [currentColumn] with a letter
  // when at outerArray[numRows] (max)
  //   work back to outerArray[0]
  //   with the algorithm outerArray--, currentColumn++
  //   until outerArray[0] is reached
  // continue until all letters used
  // THEN
  // the final part of the algorithm
  // read the letters back in the new order, left to right, through the arrays


  let grid = newGrid(numRows);
  let chars = s.split('');
  // loop the outer array consistently, incrementing 1 each time, until we reach 
  // numRows, then we reset to 0, and simply continue to loop.
  // silly mistake: be careful not to get tripped up by array index 0
  let rowIndex = 0;
  let colIndex = 0;
  let colIndexDecrease = false;
  
  //  0,0 = P
  //  0,1

  // we are done when we ran out of characters
  for(let charsIndex = 0; charsIndex < chars.length; charsIndex++) {
    // start populating the grid
    grid[rowIndex][colIndex] = chars[charsIndex];

    // move the index along
    // if(colIndexIncrease) {
    //   colIndex++
    // } else {
    //   colIndex--
    // }

    // deal with the inner index, 0 to numRows, reverse to 0, back up to numRows
    // if(colIndex === numRows) {
    //   colIndexDecrease = false;
    // } else if(colIndex === 0) {
    //   colIndexDecrease = true;
    // }

    if(colIndexDecrease) {
      colIndex--
    }
    // increment the outer loop
    rowIndex++
    
    // reset the outer loop if we hit the last one
    if(rowIndex === numRows) {
      colIndex = numRows;
      colIndexDecrease = false;
      rowIndex = 0;
    } else if(rowIndex === 0) {
      colIndexDecrease = true; 
    }

    // exit if we used the last character
    if(charsIndex + 1 === chars.length) {
      break;
    }
  }
  console.log('the grid', grid);
  console.log('strigify', JSON.stringify(grid));
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