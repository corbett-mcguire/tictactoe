let gameIsActive = true;
let currentPlayer = "X";
let gamePhase = ["", "", "", "", "", "", "", "", ""];
const currentPlayerTurn = () => `Player is ${currentPlayer}`;
const currentGameState = () => `${gameLog}`;

const userStatus = document.querySelector('.currentPlayer')
userStatus.innerHTML = currentPlayerTurn();
const gameLogElement = document.querySelector('.gameStatus');
let gameLog ='';
const winConditions = [    // What a user has to achieve to win
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function changePlayerTurn() {    //Alternates between 'player X' and 'player O'
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    userStatus.innerHTML = currentPlayerTurn();
}

function updateGamelog(gameStatus) {  //For the message output
gameLog = gameStatus
gameLogElement.innerHTML = currentGameState()
}

function updateGameBoard(cellClicked, cellIndex) { //For cell storage
    gamePhase[cellIndex] = currentPlayer;
    cellClicked.innerHTML = currentPlayer
}

function gameResult() {    //The game logic for loop
    let gameOver = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i]
        let a = gamePhase[winCondition[0]];
        let b = gamePhase[winCondition[1]];
        let c = gamePhase[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {  //Verifies that the conditions have been met
            gameOver = true;
            break
        }
        if (gameOver) {
            updateGamelog('User won the game')  
            console.log("User won the game");
        }
    }
    if (gameOver) {    //Output message if win conditions are met
        // statusDisplay.innerHTML = winMessage();
        gameIsActive = false;
        console.log("You won the game!")
        updateGamelog('You won the game!')
        return;
    }
    let gameTie = !gamePhase.includes("");
    if (gameTie) {     //Output message if game ends without for loop sensing 
        // statusDisplay.innerHTML = tieMessage();
        gameIsActive = false;
        updateGamelog('Game is a draw.')

        console.log("Game is a draw")
        return;
    }
    changePlayerTurn();
}

function playerClick(clickedCellEvent) { //Function for the player click
    console.log("calling player click")
}

function handleCellLogic(cellClickEvent) { //How the cells see what has been clicked
    console.log("clickedCellIndex")
    const currentClickedCell = cellClickEvent.target;
    const currentClickedCellIndex = parseInt(currentClickedCell.getAttribute('data-cell-index'));
    updateGameBoard(currentClickedCell, currentClickedCellIndex);
    console.log(currentClickedCellIndex)
    gameResult();
    if (gamePhase[currentClickedCellIndex] !== "" || !gameIsActive) {
        return;
    }
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellLogic));