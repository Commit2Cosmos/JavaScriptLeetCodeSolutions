function solution(N) {
    let res = [];
    sol(0,0);
    console.log(res);
    return(res)

    function sol(open, closed, stack = '') {

        if (open == closed && closed == N) {
            res.push(stack);
            return;
        }

        if (open < N) {
            sol(open + 1, closed, stack + '(');
        }

        if (closed < open) {
            sol(open, closed + 1, stack + ')');
        }
    }
}

solution(3);