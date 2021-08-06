/********************************************/
/* -VARIABLES- */
/********************************************/
const spaces = new Array(9).fill(null);
const PLAYER_O = "O";
const PLAYER_X = "X";
const cells = Array.from(document.getElementsByClassName("cell"));
const gameBoard = document.getElementById("gameBoard");
const headerText = document.getElementById("header-text");
const restartBtn = document.getElementById("restart-btn");
let currentPlayer;

/********************************************/
/* -FUNCTIONS- */
/********************************************/

// Function: ----- RESTART -----
const restart = () => {
  spaces.fill(null);
  headerText.innerText = "Let's play!";
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cells.forEach((cell) => (cell.style.cursor = "pointer"));
  });
  currentPlayer = PLAYER_X;
  gameBoard.addEventListener("click", cellClicked);
};

// Function: ----- CELL CLICK -----
const cellClicked = (e) => {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    e.target.style.cursor = "not-allowed";
    if (checkWinner()) {
      headerText.innerText = `Player ${currentPlayer} has won.`;
      gameBoard.removeEventListener("click", cellClicked);
      cells.forEach((cell) => (cell.style.cursor = "not-allowed"));
    }
    currentPlayer = currentPlayer == PLAYER_O ? PLAYER_X : PLAYER_O;
  }
};

// Function: ----- Check winner -----
const checkWinner = () => {
  // Returns "true" if there is a winning combination
  /* Winnig combinations

    0 1 2
    0 3 6
    0 4 8
    1 4 7
    2 5 8
    2 4 6
    3 4 5
    6 7 8
  */

  // Combination from 0
  if (spaces[0] === currentPlayer) {
    if (
      (spaces[1] === currentPlayer && spaces[2] === currentPlayer) ||
      (spaces[3] === currentPlayer && spaces[6] === currentPlayer) ||
      (spaces[4] === currentPlayer && spaces[8] === currentPlayer)
    ) {
      console.log(`Player ${currentPlayer} wins.`);
      return true;
    }
  }
  // Conbination from 1
  if (spaces[1] === currentPlayer) {
    if (spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`Player ${currentPlayer} wins.`);
      return true;
    }
  }

  // Combination from 2
  if (spaces[2] === currentPlayer) {
    if (
      (spaces[5] === currentPlayer && spaces[8] === currentPlayer) ||
      (spaces[4] === currentPlayer && spaces[6] === currentPlayer)
    ) {
      console.log(`Player ${currentPlayer} wins.`);
      return true;
    }
  }

  // Combinaion from 3
  if (spaces[3] === currentPlayer) {
    if (spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`Player ${currentPlayer} wins.`);
      return true;
    }
  }

  // Combinaion from 6
  if (spaces[6] === currentPlayer) {
    if (spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
      console.log(`Player ${currentPlayer} wins.`);
      return true;
    }
  }
};

/********************************************/
/* -EVENT LISTENERS- */
/********************************************/
restartBtn.addEventListener("click", restart);

restart();
