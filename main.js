const cells = document.querySelectorAll("[data-cell]");
const reload = document.getElementById("reload");
const gameState = document.getElementById("gameState");
const score = document.getElementById("score");
const blueScore = document.getElementById("blueScore");
const redScore = document.getElementById("redScore");

//function reload......................................................
reload.addEventListener("click", (el) => {
  cells.forEach((el) => {
    el.classList.remove("blue", "red");
    gameState.innerHTML = "";
  });
  cells.forEach((cell) => {
    cell.addEventListener("click", playGame, { once: true });
  });
});

let playerOne = true;

cells.forEach((cell) => {
  cell.addEventListener("click", playGame, { once: true });
});
let indexBlue = 0;
let indexRed = 0;

function playGame(e) {
  const cell = e.target;
  cell.style.transform = "scale(1.2)";
  cell.style.transition = "transform .900s ease-in-out";
  cell.classList.add(playerOne ? "blue" : "red");
  const blueCells = Array.from(document.querySelectorAll("[data-cell].blue"));
  const redCells = Array.from(document.querySelectorAll("[data-cell].red"));

  setTimeout(function () {
    cell.style.transform = "scale(1)";
  }, 200);

  playerOne = !playerOne;

  let textGameState;

  if (playerOne) {
    textGameState = "it's player Blues's turn";
  } else {
    textGameState = "it's player Reds's turn";
  }
  gameState.innerHTML = textGameState;
  console.log(textGameState);

  // console.log(blueCells.length);
  console.log(redCells.length);

  // Check for winner

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // let isBlueWinner = winningCombos.some((combo) => {
  //   console.log(combo.every((index) => blueCells.includes(cells[index])));
  // });

  let isBlueWinner = winningCombos.some((el) => {
    return el.every((index) => cells[index].classList.contains("blue"));
    score.innerHTML = "Blues wins";
  });

  let isRedWinner = winningCombos.some((el) => {
    return el.every((index) => cells[index].classList.contains("red"));
    score.innerHTML = "Reds wins";
  });

  if (isBlueWinner === true) {
    gameState.innerHTML = "Blues wins!!";
    indexBlue++;
    blueScore.innerHTML = indexBlue;
  } else if (isRedWinner === true) {
    gameState.innerHTML = "Reds wins!!";
    indexRed++;
    redScore.innerHTML = indexRed;
  } else if (document.querySelectorAll(".cell:not(.blue):not(.red)").length === 0) {
    gameState.innerHTML = "Tie Game!!";
  }
}

// Enregistrement du plugin ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// Définition de l'animation avec GSAP
// gsap.to(".cube", {
// // x: 400,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".cube",
//     start: "top center",
//     end: "bottom center",
//     markers: true,
//     toggleClass : "recule"

//   }
// });

// Enregistrement du plugin ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// Définition de l'animation avec GSAP
// gsap.to(".cube", {
// // x: 400,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".cube",
//     start: "top center",
//     end: "bottom center",
//     markers: true,
//     toggleClass : "recule"

//   }
// });
