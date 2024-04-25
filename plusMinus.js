function plusMinus(arr) {
    let big = 0, small = 0
    for (let i of arr) {
        if (i > 0) {
            big += 1
        }
        if (i < 0) {
            small += 1
        }
    }
    console.log(big, small)
    console.log((big/arr.length).toFixed(6))
    console.log((small/arr.length).toFixed(6))
    console.log(((arr.length-big-small)/arr.length).toFixed(6))

}

plusMinus([-4, 3, -9, 0, 4, 1])