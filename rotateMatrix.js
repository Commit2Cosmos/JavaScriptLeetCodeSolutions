function solutions(a) {
    let matrix = JSON.parse(JSON.stringify(a));
    n = a.length;
    console.log(matrix)
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            matrix[j][n-i-1] = a[i][j]
        }
    }
    console.log(matrix)
}

function solution(a) {
    let N = a.length;
    for (i = 0; i < parseInt(N / 2); i++) {
        for (j = i; j < N - i - 1; j++) {

            var temp = a[i][j];
            a[i][j] = a[N - 1 - j][i];
            a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j];
            a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i];
            a[j][N - 1 - i] = temp;
        }
    }
    console.log(a)
}

solution([[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]])