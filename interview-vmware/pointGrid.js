/**
 * TODO:
 * Implement the 3 missing methods in this class:
 *    > getCellIndex(x, y)
 *    > getPoints(x, y)
 *    > getColumnOfPoints(x)
 */
 class PointGrid {
    constructor({ height = 500, width = 500, cellSize = 50 }) {
      this.height = height;
      this.width = width;
      this.cellSize = cellSize;
      this.cells = []; // each cell is an array of Points
      /**
       * Given the default height (500px), width (500px), and cellSize (50px),
       * the PointGrid will become a 10x10 grid, and each *SQUARE* cell in the
       * grid has a size of (50px * 50px).
       *
       * The grid will be stored in this.cells, which is an array.
       * Each cell is an array of points.
       *
       *    this.cells grid representation:
       *      [ 0,  1, ..., 9,   // row 0
       *       10, 11, ..., 19,   // row 1
       *       ...                // ...
       *       90, 91, ..., 99 ]  // row 9
       *
       *    this.cells[index] structure:  
       *      [{ x: 0, y: 0, name: "Sarah" }, { x: 5, y: 20, name: "John" }]
       */
  
      this.numColumns = Math.ceil(width / cellSize); // # of columns in the grid
      this.numRows = Math.ceil(height / cellSize); // # of rows in the grid
      this.numCells = this.numColumns * this.numRows; // # of cells in the grid (numColumns * numRows)
    }
  
    /**
     * Add a list of points to the PointGrid. Calls addPoint on each element.
     * @param {Object[]} points
     */
    addPoints(points = []) {
      points.forEach((point) => this.addPoint(point));
      console.log("Added points; this.cells: ", this.cells);
    }
  
    /**
     * Add a point to the PointGrid (this.cells).
     * @param {Object} point
     * @param {number} point.x x-coordinate of the point in the grid
     * @param {number} point.y y-coordinate of the point in the grid
     */
    addPoint(point = {}) {
      const cellIndex = this.getCellIndex(point.x, point.y);
  
      if (!this.cells[cellIndex]) {
        this.cells[cellIndex] = [];
      }
      this.cells[cellIndex].push(point); // Add point to the PointGrid
    }
  
    /**
     * Return the index in the grid associated with input (x,y) coordinate.
     * @param {number} x x-coordinate of the point in the grid
     * @param {number} y y-coordinate of the point in the grid
     * @returns {number}
     */
    getCellIndex(x, y) {
      // (x: 0, y: 0)   -> cellIndex 0   ( row 1, cell 1) is (index 0)
      //   (x:1, y:1) -> cellIndex 0
      //   (x:49, y:49) -> cellIndex 0
  
      // (x: 50, y: 0)  -> cellIndex 1  (row 1, cell 2) is (index 1)
      //   (x:51, y: 0) -> cellIndex 1
      //   (x:99, y: 49) -> cellIndex 1
  
      // (x: 100, y: 0) -> cellIndex 2  (row 1, cell 3) is (index 2)
      //   (x: 105, y: 0)  -> cellIndex 2
      //   (x: 149, y: 49) -> cellIndex 2
  
      // (x: 155, y: 49) -> cellIndex 3
  
      // row 1 of cells then would max out at
      //   (x: 499, y: 49)
  
      // row 2 of cells would start at
      //   (x: [0, 499] y: [0, 49]) ROW 1
      //   (x: [0, 499] y: [50, 99]) ROW 2
      //   (x: [0, 499] y: [100, 149]) ROW 3
      // ....
      //   (x: [0, 499] y: [400, 449]) ROW 9
      //   (x: [0, 499] y: [450, 499]) ROW 10
  
      // row 2 of cells would end at
      //   (x: y: )
  
      // (x: 0, y: 50)  -> cellIndex 10
      // (x: 50, y: 50) -> cellIndex 11
  
      // (x: 0, y: 450) -> cellIndex 90
      // (x: 50, y: 450) -> cellIndex 91
  
      // ...
  
      // (x: 499, y: 499) -> cellIndex 99
  
      // this should represent cell 1
      // if (x <= 49 && y <= 49) {
      //   return 0;
      // }
  
      // // this reprsents cell 2
      // if (x <= 99 && y <= 49) {
      //   return 1;
      // }
  
      // // this reprsents cell 2
      // if (x <= 149 && y <= 49) {
      //   return 2;
      // }
  
      // this is max y values, to decide what row we are in
      // before we went to columns.
      // [49, 99, 149, 199, 249, 299, 349, 399, 449, 499] // max 10
  
      // input: x -> 25 ; getCellIndex(25, _) -> 0
      // input: x -> 75 ; getCellIndex(75, _) -> 1
      // input: x -> 125; getCellIndex(125, _) -> 2
      // this.width is important for x
      // this.cellsize is important for both x,y
  
      // *    this.cells grid representation:
      // *      [ 0,  1, ..., 9,   // row 0
      // *       10, 11, ..., 19,   // row 1
      // *       ...                // ...
      // *       90, 91, ..., 99 ]  // row 9
      // [row, col]
      // [0, 0] = 0
      // [0, 1] = 1
      // [1, 0] = 10
      // [1, 1] = 11
      // [4, 0] = 40
      // [4, 1] = 41
      // [4, 2] = 42
      // [4, 3] = 43
      // ...
      // [4, 6] = 46   // y * this.numRows + x = 46
  
      const columnVal = Math.floor(x / this.cellSize);
      const rowVal = Math.floor(y / this.cellSize);
      return rowVal * this.numRows + columnVal;
      // x, y calc
      // 0 / 50 -> 0
      // 50 / 50 -> 1
      // 150 / 50 -> 2
      // 499 / 50 -> 9.98 -> 9
  
      // return 0; // TODO:
    }
  
    /**
     * Return the points from the correct cell given an (x,y) coordinate.
     * @param {number} x x-coordinate of the point in the grid
     * @param {number} y y-coordinate of the point in the grid
     * @returns {Object[]}
     */
    getPoints(x, y) {
      const cellIndex = this.getCellIndex(x, y);
      // index is going to be an array of points [{},{}.....]
      
      return this.cells[cellIndex]; 
    }
  
    /**
     * Return all the points from an entire column of cells given an x-coordinate.
     * @param {number} x x-coordinate of the point in the grid
     * @returns {Object[]}
     */
    getColumnOfPoints(x) {
      const columnIndex = this.getCellIndex(x, 0); // don't care about y 
  
      // i have an columnIndex, using 0 for y i know im in the first row 
      // i need to then get every cell at this columnIndex through all rows 
  
      let result = [];
      //result.push(this.cells[columnIndex]) // that would get me the 1 
      // now get the rest of the cells in the other rows 
  
      for(let i = 1; i <= this.numRows; i++) {
        const nextIndex = this.getCellIndex(x, i * this.cellSize);
        result = result.concat(this.cells[nextIndex]);
      }
  
      return result; 
    }
  }
  
  export default PointGrid;
  