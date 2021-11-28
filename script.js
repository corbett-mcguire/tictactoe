const player1 = 'x'
const player2 = 'o'
const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const gridElement = document.getElementById("grid");
const cellElements = document.querySelector("[data-cell]");
const winTextElement = document.getElementById("winText");
// player 1 check
const winTextCheckElement = document.getElementById("winTextElement");
let player2_turn = false




