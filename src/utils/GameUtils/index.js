const checkSequence = (opt1, opt2, opt3) => {
    return opt1 === opt2 && opt2 === opt3
}

export const checkForWinner = (board) => {

    // Rows
    for(let i=0; i<9; i+=3) {
        if(checkSequence(board[i], board[i+1], board[i+2])) {
            console.log("Row Winner!")
            return true
        }
    }

    // Columns
    for(let i=0; i<3; i+=1) {
        if(checkSequence(board[i], board[i+3], board[i+6])) {
            console.log("Column Winner!")
            return true
        }
    }

    // Diagonals
    if(board[0] === board[4] && board[4] === board[8]) {
        console.log("Diagonal Winner!")
        return true
    }
    if(board[2] === board[4] && board[4] === board[6]) {
        console.log("Diagonal Winner!")
        return true
    }

}