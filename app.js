// This sets the array for the board used later for winner
var board = [
              [null, null, null],
              [null, null, null],
              [null, null, null]
                                  ];

var player01 = "x";
var player02 = "o";

var counter = 0;

var turn;

var winner;


//Increment the counter
function switchTurn() {
  counter++;
}


//This tracks whose turn it is
function whoseTurn() {
  if (counter % 2 === 0) {
    turn = player01;
  }
  else {
    turn = player02;
  }
}

//This checks if square is empty
function emptySquare(x, y) {
  if (board[x][y] === "") {
    return true;
  }
  else {
    return false;
  }
}

//This sets the square to x or o
function setSquare(x, y) {
  if (turn === "x" && board[x][y] === "") {
    board[x][y].innerHTML = "x";
    switchTurn();
    whoseTurn();
  }
  else if (turn === "o" && board[x][y] === "") {
    board[x][y] = "o";
    switchTurn();
    whoseTurn();
  }
}


function getWinner() {
  checkRows();
  checkColumns();
  checkDiagonals();
  if (winner === "x") {
    prompt("x wins!");
  }
  else if (winner === "o") {
    prompt("o wins!");
  }
}



//Winner Logic
function checkRows() {
  if (board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") {
      winner = "x";
  }
  if (board[0][0] === "o" && board[0][1] === "o" && board[0][2] === "o") {
    winner = "o";
  }
  if (board[1][0] === "x" && board[1][1] === "x" && board[1][2] === "x") {
  winner = "x";
  }
  if (board[1][0] === "o" && board[1][1] === "o" && board[1][2] === "o") {
winner = "o";
  }
  if (board[2][0] === "x" && board[2][1] === "x" && board[2][2] === "x") {
winner = "x";
  }
  if (board[2][0] === "o" && board[2][1] === "o" && board[2][2] === "o") {
winner = "o";
  }
}



function checkColumns() {
  if (board[0][0] === "x" && board[1][0] === "x" && board[2][0] === "x") {
      winner = "x";
  }
  if (board[0][0] === "o" && board[1][0] === "o" && board[2][0] === "o") {
    winner = "o";
  }
  if (board[0][1] === "x" && board[1][1] === "x" && board[2][1] === "x") {
    winner = "x";
  }
  if (board[0][1] === "o" && board[1][1] === "o" && board[2][1] === "o") {
    winner = "o";
  }
  if (board[0][2] === "x" && board[1][2] === "x" && board[2][2] === "x") {
    winner = "x";
  }
  if (board[0][2] === "o" && board[1][2] === "o" && board[2][2] === "o") {
    winner = "o";
  }

function checkDiagonals() {
    if (board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x") {
      winner = "x";
  }
  if (board[0][0] === "o" && board[1][1] === "o" && board[2][2] === "o") {
    winner = "o";

  if (board[0][2] === "x" && board[1][1] === "x" && board[2][0] === "x") {
    winner = "x";
  }
  if (board[0][2] === "o" && board[1][1] === "o" && board[2][0] === "o") {
    winner = "o";
  }
}


//Reset Board to blank squares using a loop within a loop
function resetBoard() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      board[i][j] = null;
    }
  }
}



//This is what happens when you click on the square
function clickHandler() {
    console.log("Event Listener works!");
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          board[i][j] = this;
        }
      }
    }
  }


//These are the Event Listeners
board[0][0].addEventListener("click", clickHandler);

board[0][1].addEventListener("click", clickHandler);

board[0][2].addEventListener("click", clickHandler);

board[1][0].addEventListener("click", clickHandler);

board[1][1].addEventListener("click", clickHandler);

board[1][2].addEventListener("click", clickHandler);

board[2][0].addEventListener("click", clickHandler);

board[2][1].addEventListener("click", clickHandler);

board[2][2].addEventListener("click", clickHandler);


}
