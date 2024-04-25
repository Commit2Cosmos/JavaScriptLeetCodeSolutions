function oneSetValidSudoku(board) {
    let set = new Set()
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const value = board[i][j]
            if (value !== ".") {
                const row = `${value} at row ${i}`
                const column = `${value} at column ${j}`
                const box = `${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`
                console.log(`${row}, ${column}, ${box}`)
                if (set.has(row) || set.has(column) || set.has(box)) {
                    return false
                } else {
                    set.add(row)
                    set.add(column)
                    set.add(box)
                }
            }
        }
    }

    return true
};

console.log(oneSetValidSudoku([
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))