const player1 = "X";
const player2 = "O";

let gameStart = true;
let currentPlayer = player1;
let cellStore = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => 'Phyrric Victory!';
const tieMessage = () => "It's a tie..."

const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function cellClick(clickedCell, clickedCellIndex) {
    gamePhase[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function changePlayerTurn() {
    currentPlayer = currentPlayer === player1 ? player2 : player1
}
function gameResult() {
    let gameOver = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i]
        let a = gamePhase[winCondition[0]];
        let b = gamePhase[winCondition[1]];
        let c = gamePhase[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue;

        }
        if (a === b && b === c) {
            gameOver = true;
            break
        
        }
    

}

if (gameWin) {
    statusDisplay.innerHTML = winMessage();
    gameStart = false;
    return;
}

let gameTie = !gamePhase.includes("");
if (gameTie) {
    statusDisplay.innerHTML = tieMessage();
    gameStart = false;
    return;
}

function playerClick(clickedCellEvent){
    console.log("calling player click")
}



// const gridElement = document.getElementById("grid");
// const cellElements = document.querySelector("[data-cell]");
// const winTextElement = document.getElementById("winText");
// // player 1 check
// const winTextCheckElement = document.getElementById("winTextElement");



function restartGame() {
    gameStart = true;
    currentPlayer = player1;
    grid = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener ("click", playerClick));
document.querySelectorAll(".restartButton").addEventListener("click", restartGame);
}