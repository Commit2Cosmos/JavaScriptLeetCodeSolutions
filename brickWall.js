const leastBricks = function(wall) {
    const gaps = new Map();

    for (let row = 0; row < wall.length; row++) {
        let sum = 0;
        if (wall[row].length == 1) gaps.set(sum, 0)
        for (let column = 0; column < wall[row].length - 1; column++) {
            sum += wall[row][column];
            gaps.get(sum) ? gaps.set(sum, gaps.get(sum) + 1) : gaps.set(sum, 1);
        }
    }

    const max = Math.max(...gaps.values());
    const res = wall.length - max;

    console.log(res);
    return res;
};

const wall = [[1],[1],[1]]

leastBricks(wall)