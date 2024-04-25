function pacificAtlantic(heights: number[][]): number[][] {

    const [rows, cols] = [heights.length, heights[0].length]
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    let pacific: Set<string> = new Set();
    let atlantic: Set<string> = new Set();


    const dfs = (r: number, c: number, visited: Set<string>, prevHeight: number): void => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || visited.has([r, c].join(',')) || heights[r][c] < prevHeight) return;

        visited.add([r, c].join(','));
        
        for (let d of DIRS) {
            dfs(r + d[0], c + d[1], visited, heights[r][c]);
        }
    }


    for (let i = 0; i < cols; i++) {
        dfs(0, i, pacific, 0);
        dfs(rows-1, i, atlantic, 0);
    }

    for (let i = 0; i < rows; i++) {
        dfs(i, 0, pacific, 0);
        dfs(i, cols-1, atlantic, 0);
    }


    return Array.from(new Set([...pacific].filter(x => atlantic.has(x)))).map((v) => v.split(',').map(Number))
};


const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
console.log
(pacificAtlantic(heights))