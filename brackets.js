let a = 
[ 
[ 5, 3, 6, 1, 4 ],
[ 5, 8, 7, 4, 5 ],
[ 1, 2, 4, 3, 9 ],
[ 3, 1, 2, 2, 7 ],
[ 8, 8, 4, 9, 2] ]

let n = a.length; // 4
for (let k = 0; k < Math.sqrt(n); k++) {
    for (let i = k; i < n/2; i++) { // 2
        for (let j=i; j<n-i-1; j++) {
            let tmp = a[i][j];
            a[i][j] = a[j][n-i-1];
            a[j][n-i-1] = a[n-i-1][n-j-1];
            a[n-i-1][n-j-1] = a[n-j-1][i];
            a[n-j-1][i] = tmp;
        }
    }
}
console.log(a)