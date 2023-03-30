let cells = document.querySelectorAll('[data-cell]');
let playerOne = "X";
let playerTwo = "O";
let playerTurn = playerOne;


cells.forEach((cell) => {
    cell.addEventListener("click", playGame, { once: true });

});

function playGame(e) {
  e.target.innerHTML = playerTurn;
  e.target.style.textShadow = " 1px 1px 2px #fff, -1px 3px 2px #000";
  e.target.style.transform = "scale(1.2)";
  e.target.style.transition = "transform .900s ease-in-out";

  setTimeout(function () {
    e.target.style.transform = "scale(1)";
  }, 200);

  playerTurn == playerOne ? (playerTurn = playerTwo) : (playerTurn = playerOne);
  console.log("ok");
}

