const numberOfWaysWithBlocked1 = (squares, blocked, memo={}) => {

    const m = squares[0];
    const n = squares[1];

    
    if (blocked.toString().includes(squares.toString())) return 0


    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0

    const key = m + ',' + n;
    const key1 = n + ',' + m;

    if (key in memo) return memo[key];
    if (key1 in memo) return memo[key1];

    memo[key] = numberOfWaysWithBlocked1([m - 1, n], blocked , memo) + numberOfWaysWithBlocked1([m, n - 1], blocked , memo);
    return memo[key];
}


const numberOfWaysWithBlocked = (squares, blocked) => {
    if (blocked[0]) {
        for (let i = 0; i < blocked.length; i++) {
            blocked[i][0] = squares[0] - blocked[i][0];
            blocked[i][1] = squares[1] - blocked[i][1];
        }
    }
    return numberOfWaysWithBlocked1(squares, blocked, memo={})
}

console.log(numberOfWaysWithBlocked([182], [[]]));