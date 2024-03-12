// Leetcode 36. Valid Sudoku
// O(n^2) Time Complexity | O(n) Space Complexity

function isValidSudoku(board: string[][]): boolean {
	// to account for rows
	const rows = board;
	for (let row of rows) {
		const filteredRow = row.filter((value: string) => value !== '.');
		// check for duplication in rows
		if (new Set(filteredRow).size !== filteredRow.length) {
			return false;
		}
	}
	// to account for sub boxes
	const subBoxes: { [boxIndex: number]: string[] } = {};
	// to account for columns
	for (let row = 0; row < 9; row++) {
		const columnsArray: string[] = [];
		for (let col = 0; col < 9; col++) {
			// swap the rows and columns
			const cell = board[col][row];
			if (cell === '.') continue;
			columnsArray.push(cell);

			// get row and column position to figure out where we are
			// take row and divide by 3 and multiply to account for index
			// (0,1,2)
			const boxIndex = 3 * Math.floor(row / 3) + Math.floor(col / 3);
			if (subBoxes[boxIndex]) {
				if (subBoxes[boxIndex].find((value) => value === cell)) {
					return false;
				}
				subBoxes[boxIndex].push(cell);
			} else {
				subBoxes[boxIndex] = [cell];
			}
		}
		if (new Set(columnsArray).size !== columnsArray.length) {
			return false;
		}
	}
	return true;
}
