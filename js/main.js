const grids = document.querySelectorAll('.grid-box')


let currentPlayer = 'O'
let player1 = 'O'
let player2 = 'X'
let playerTurn = 0;

//all winning posibilities 
const winningPossibilities = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal 
    [0, 4, 8],
    [2, 4, 6]
];

//empty board array 
let board = [ '', '', '', '', '', '', '', '', ''];


grids.forEach((grid, index) => {
    grid.addEventListener('click', () => {
        playerGrid(grid, index)
        // console.log('clicked', grid, index);
    }, {once : true})
})

const playerGrid = (grid, index) => {
    if(playerTurn === 0){
        playerTurn = 1;
        board[index] = player1
        grid.append(player1)
        console.log(board);

    }else{
        playerTurn = 0;
        board[index] = player2
        grid.append(player2)
        console.log(board);
    }
    
}

const checkWinning = () => {
    for(let i = 0; i < winningPossibilities.length; i++){
        const winning = winningPossibilities[i]

        let a = winning[0]
        let b = winning[1]
        let c = winning[2]

        let contentA = board[a]
        let contentB = board[b]
        let contentC = board[c]

        if(contentA === contentB && contentB === contentC && contentA !== ""){
            grid.style.pointerEvents = 'none'
        }
    }
}