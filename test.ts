
let map: Map<number, number[]> = new Map()

map.set(1, [2,3,4,5])
map.set(2, [1,3])

for (let i of map.get(1)!) {
    console.log(i)
}

// console.log(map)