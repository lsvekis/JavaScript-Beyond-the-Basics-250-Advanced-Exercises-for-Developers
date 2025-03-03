
function isValid(board, row, col, num) {
for (let i = 0; i < 9; i++) {
if (board[row][i] === num || board[i][col] === num) return false;
}
const startRow = Math.floor(row / 3) * 3;
const startCol = Math.floor(col / 3) * 3;
for (let i = startRow; i < startRow + 3; i++) {
for (let j = startCol; j < startCol + 3; j++) {
if (board[i][j] === num) return false;
}
}
return true;
}

function solveSudoku(board) {
for (let row = 0; row < 9; row++) {
for (let col = 0; col < 9; col++) {
if (board[row][col] === 0) {
for (let num = 1; num <= 9; num++) {
if (isValid(board, row, col, num)) {
board[row][col] = num;
if (solveSudoku(board)) return true;
board[row][col] = 0;
}
}
return false;
}
}
}
return true;
}

// Example board (0 represents empty cell)
const board = [
[5,3,0, 0,7,0, 0,0,0],
[6,0,0, 1,9,5, 0,0,0],
[0,9,8, 0,0,0, 0,6,0],
[8,0,0, 0,6,0, 0,0,3],
[4,0,0, 8,0,3, 0,0,1],
[7,0,0, 0,2,0, 0,0,6],
[0,6,0, 0,0,0, 2,8,0],
[0,0,0, 4,1,9, 0,0,5],
[0,0,0, 0,8,0, 0,7,9]
];

if (solveSudoku(board)) {
console.log(board);
} else {
console.log("No solution found.");
}

Explanation:
Backtracking attempts to fill empty cells while ensuring Sudoku rules. If a number doesn’t lead to a solution, it backtracks and tries a different number.
