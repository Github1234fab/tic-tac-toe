const cells = document.querySelectorAll("[data-cell]");
const button = document.getElementById("button");
const score = document.getElementById("score");
const stop = document.getElementById("stop");

button.addEventListener("click", () => {
  location.reload();
});

let playerOne = true;

cells.forEach((cell) => {
  cell.addEventListener("click", playGame, { once: true });
});

function playGame(e) {
  const cell = e.target;
  cell.style.transform = "scale(1.2)";
  cell.style.transition = "transform .900s ease-in-out";
  cell.classList.add(playerOne ? "blue" : "red");
  const blueCells = Array.from(document.querySelectorAll("[data-cell].blue"));
  const redCells = Array.from(document.querySelectorAll("[data-cell].red"));
  // const blueCells = document.querySelectorAll("[data-cell].blue");
  // const redCells = document.querySelectorAll("[data-cell].red");

  setTimeout(function () {
    cell.style.transform = "scale(1)";
  }, 200);

  playerOne = !playerOne;

  let textGameState;

  if (playerOne) {
    textGameState = "it's player Two's turn";
  } else {
    textGameState = "it's player One's turn";
  }
  score.innerHTML = textGameState;
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

  let isBlueWinner = winningCombos.some((combo) => {
    console.log(combo.every((index) => blueCells.includes(cells[index])));
  });

  // let comboIndex = -1;
  // let comboColor = "";

  // for (let i = 0; i < winningCombos.length; i++) {
  //   const combo = winningCombos[i];
  //   let cellColor = "";
  //   let isComboValid = true;

  //   for (let j = 0; j < combo.length; j++) {
  //     const cellIndex = combo[j];

  //     if (j === 0) {
  //       cellColor = cells[cellIndex].classList.contains("blue") ? "blue" : "red";
  //     } else if (cells[cellIndex].classList.contains(cellColor)) {
  //       continue;
  //     } else {
  //       isComboValid = false;
  //       break;
  //     }
  //   }

  //   if (isComboValid) {
  //     comboIndex = i;
  //     comboColor = cellColor;
  //     break;
  //   }
  // }

  // if (comboIndex !== -1) {
  //   stop.innerText = "PlayerOne are the winner!!";
  //   // console.log(`La combinaison ${comboIndex} contient seulement des cellules ${comboColor}.`);
  // } else {
  //   stop.innerText = "PlayerTwo are the winner!!";
  //   // console.log("Aucune combinaison ne contient seulement des cellules d'une seule couleur.");
  // }
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
