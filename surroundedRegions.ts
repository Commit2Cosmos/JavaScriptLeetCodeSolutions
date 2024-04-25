type MyCharType = "X" | "O" | "T";


function solve(board: MyCharType[][]): void {
    const [rows, cols] = [board.length, board[0].length]
    const DIRS = [[-1, 0], [0, -1], [0, 1], [1, 0]];


    const dfs = (r: number, c: number, visited: Set<string> = new Set()) => {

        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] != 'O' || visited.has([r, c].join(','))) return ;

        board[r][c] = "T";

        visited.add([r, c].join(','));
        for (let d of DIRS) {
            dfs(r + d[0], c + d[1], visited);
        }
        visited.delete([r, c].join(','));

    }

    for (let i = 0; i < cols; i++) {
        dfs(0, i)
        dfs(rows-1, i);
    }

    for (let i = 0; i < rows; i++) {
        dfs(i, 0);
        dfs(i, cols-1);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == "O") {
                board[i][j] = "X"
            } else if (board[i][j] == "T") {
                board[i][j] = "O"
            }
        }
    }
};


const board: MyCharType[][] = [
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
]

solve(board)
console.log(board)