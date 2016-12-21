/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let surroundingOnes = checkSurroundings(grid, i, j);
        result += (4 - surroundingOnes);
      }
    }
  }
  return result;
};

function checkSurroundings(grid, i, j) {
  let result = 0;
  if (i + 1 < grid.length && grid[i + 1][j] === 1) {
    result += 1;
  }
  if (i - 1 >= 0 && grid[i - 1][j] === 1) {
    result += 1;
  }
  if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
    result += 1;
  }
  if (j - 1 >= 0 && grid[i][j - 1] === 1) {
    result += 1;
  }
  return result;
}
