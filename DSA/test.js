"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveSudoku = void 0;
// O(1) time | O(1) space - assuming board is always 9x9 (fixed size)
function isValidAtPosition(value, row, col, board) {
    const rowIsValid = !board[row].includes(value);
    const colIsValid = !board.map((row) => row[col]).includes(value);
    if (!rowIsValid || !colIsValid) {
        return false;
    }
    const subGridRowStart = Math.floor(row / 3) * 3;
    const subGridColStart = Math.floor(col / 3) * 3;
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let colIndex = 0; colIndex < 3; colIndex++) {
            const rowToCheck = subGridRowStart + rowIndex;
            const colToCheck = subGridColStart + rowIndex;
            const existingValue = board[rowToCheck][colToCheck];
            if (existingValue === value)
                return false;
        }
    }
    return true;
}
function solvePartialSudoku(row, col, board) {
    let currentRow = row;
    let currentCol = col;
    if (currentCol === board[currentRow].length) {
        currentRow += 1;
        currentCol = 0;
        if (currentRow === board.length) {
            return true;
        }
    }
    if (board[currentRow][currentCol] === 0) {
        return tryDigitsAtPosition(currentRow, currentCol, board);
    }
    return solvePartialSudoku(currentRow, currentCol + 1, board);
}
function tryDigitsAtPosition(row, col, board) {
    for (let digit = 1; digit < 10; digit++) {
        if (isValidAtPosition(digit, row, col, board)) {
            board[row][col] = digit;
            if (solvePartialSudoku(row, col + 1, board)) {
                return true;
            }
        }
    }
    board[row][col] = 0;
    return false;
}
function solveSudoku(board) {
    solvePartialSudoku(0, 0, board);
    return board;
}
exports.solveSudoku = solveSudoku;
