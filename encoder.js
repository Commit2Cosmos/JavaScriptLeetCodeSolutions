const encryptRailFence = (text, rails) => {

    const create = (amount) => new Array(amount).fill(0);
    const make = (rows, cols) => create(cols).map((o, i) => create(rows))

    let matrix = make(text.length, rails)

    let dirDown = false
    let row = 0, col = 0

    for (let i = 0; i < text.length; i++) {
        if ((row == 0) || (row == rails - 1)) {
            dirDown = !dirDown
        }

        matrix[row][col] = text[i]
        col += 1

        if (dirDown) {
            row += 1
        }
        else {
            row -= 1
        }
    }
    let result = []

    for (let i = 0; i < rails; i++) {
        for (let j = 0; j < text.length; j++) {
            if (matrix[i][j] != 0){
                result.push(matrix[i][j])
            }
        }
    }
    console.log(result)
    return result
}



const decryptRailFence = (text, rails) => {
    
}