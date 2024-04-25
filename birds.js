function migratoryBirds(arr) {
    let sight = {}
    for (let i of arr) {
        if (i in sight) {
            sight[i] = sight[i] + 1
        }
        else {
            sight[i] = 1
        }
    }
    const max = Object.keys(sight).reduce(function(a, b){ return sight[a] >= sight[b] ? a : b });
    return max
}

console.log(migratoryBirds([2,2,2,1,1,1,3,3,3]))