function climbStairs(n: number): number {

    const climbRecurMemo = (n: number, memo: {[key: number]: number} = {}): number => {
        if (n < 0) return 0
        if (n == 0) return 1

        if (memo[n]) return memo[n];


        memo[n] = climbRecurMemo(n-1, memo) + climbRecurMemo(n-2, memo);

        return memo[n]
    }


    let arr = new Array(2);

    arr[0] = 1;
    arr[1] = 1;

    const climbRecur = (n: number): number => {
        for (let i = 0; i < n-1; i++) {
            let sum = arr[0] + arr[1];
            arr[1] = arr[0];
            arr[0] = sum;
        }

        return arr[0]
    }

    return climbRecur(n)
};




const n: number = 4;
console.log(climbStairs(n));
