function solution(stock) {
    let left = 0, right = 1;
    let max = null;

    while (right < stock.length) {
        if (stock[left] > stock[right]) {
            left = right;
            right++;
        }
        else {
            const diff = stock[right] - stock[left];
            max = Math.max(max, diff);
            right++;
        }
    }
    return Math.max(0, max);
}

console.log(solution([7,1,5,3,6,4]));
console.log(solution([7,6,4,3,1]));