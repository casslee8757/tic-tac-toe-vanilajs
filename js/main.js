const grids = document.querySelectorAll('.grid-box')
const player1Scoreboard = document.querySelector('.player1__score')
const player2Scoreboard = document.querySelector('.player2__score')


let player1 = 'O'
let player2 = 'X'
let playerTurn = 0;
let cellBoxes = 0;
let playerScore1 = 0;
let playerScore2 = 0;

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
        cellBoxes++

    }else{
        playerTurn = 0;
        board[index] = player2
        grid.append(player2)
        cellBoxes++
    }
    
    checkWinning()
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
            pointerDisable()
            
            if(playerTurn === 1){
                playerScore1++;
                player1Scoreboard.innerText = playerScore1
                console.log('player 1 wins');

            }else{
                playerScore2++;
                player2Scoreboard.innerText = playerScore2
                console.log('player 2 wins');
            }
        }else if(cellBoxes === 9){
            console.log('draw');
        }

        
        
    }
}

const pointerDisable = () => {
    grids.forEach( grid => {
       grid.style.pointerEvents = 'none'
    })
}