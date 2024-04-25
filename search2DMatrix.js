function solution(matrix, number) {
    let rows = matrix.length, columns = matrix[0].length;
    let bot = 0, top = rows - 1;
    
    while (bot <= top) {
        let row = Math.floor((top + bot) / 2);

        if (matrix[row][0] > number) {
            top = row - 1;
        }
        else if (number > matrix[row][columns-1]) {
            bot = row + 1;
        }
        else {
            break;
        }
    }

    if (bot > top) return false;


    let row = Math.floor((top + bot) / 2);
    let l = 0, r = columns - 1;

    while (l <= r) {
        let curr = Math.floor((l + r) / 2);

        if (matrix[row][curr] > number) {
            r = curr - 1;
        }
        else if (matrix[row][curr] < number) {
            console.log(matrix[row][curr]);
            l = curr + 1;
        }
        else {
            return true;
        }
    }
    return false;
}


console.log(solution([[1,2,3,7],[10,11,16,20],[23,30,34,60]], 20));