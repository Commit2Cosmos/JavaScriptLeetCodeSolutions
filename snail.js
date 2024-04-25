// AT CORNER: change dir, update min/max value, go again
snail = function(array) {
    const m = array.length
    const n = array[0].length

    let result = [array[0][0]]

    let maxi = m - 1, maxj = n - 1, mini = 0, minj = 0
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let dir = 0
    let pos = [0, 0]

    let done = false

    while (!done) {
        if (dir == 4) dir = 0

        pos[0] += dirs[dir][0]
        pos[1] += dirs[dir][1]
        result.push(array[pos[0]][pos[1]])

        if (dir == 0 && pos[1] == maxj) {
            dir += 1
            mini += 1
        }
        else if (dir == 1 && pos[0] == maxi) {
            dir += 1
            maxj -= 1
        }
        else if (dir == 2 && pos[1] == minj) {
            dir += 1
            maxi -= 1
        }
        else if (dir == 3 && pos[0] == mini) {
            dir += 1
            minj += 1
        }
        
        if (mini > maxi || minj > maxj) {
            done = true;
        }
    }
    return result
}


let arr = 
[
[1,2, 3, 4],
[0,11,12,5],
[9,8, 7, 6] ]

console.log(snail(arr))