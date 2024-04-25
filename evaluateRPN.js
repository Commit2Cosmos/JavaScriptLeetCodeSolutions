function solution(tokens) {
    let stack = [];
    for (let i of tokens) {
        if (!isNaN(i)) {
            stack.push(parseInt(i));
        } else {
            const nums = stack.splice(stack.length-2);
            const res = eval(`${nums[0]} ${i} ${nums[1]}`);
            stack.push(Math.floor(parseInt(res)));
        }
    }
    // console.log(stack)
    return stack[0];
}

solution(['1', '2', '+', '3', '-']);