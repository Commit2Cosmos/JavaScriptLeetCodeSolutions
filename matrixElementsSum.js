function matrixElementsSum(matrix) {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix[j].length; i++) {
            if (matrix[j][i] === 0) {
                let c = 1;
                while (j+c < matrix.length) {
                    matrix[j+c][i] = 0;
                    c++
                }
            }
            else {
                sum += matrix[j][i];
            }
        }
    }
    console.log(sum)
    return sum
}

matrixElementsSum([[0,1,1,2], [0,5,0,0], [2,0,3,3]])