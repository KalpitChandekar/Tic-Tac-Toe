let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false; // Change "0" to "X" for the initial turn
let resetButton = document.querySelector("button");

// Function to change the turn
const changeTurn = () => {
  turn = turn === "X" ? "O" : "X"; // Update the turn variable
  return turn;
};

// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      isgameover = true;
      document.querySelector(".imgbox img ").style.width = "200px";
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin(); // Call the checkWin function after each move
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

resetButton.addEventListener("click", () => {
  let boxtext = document.getElementsByClassName("boxtext");

  // Clear the text content of all game boxes
  for (let i = 0; i < boxtext.length; i++) {
    boxtext[i].innerText = "";
  }

  // Reset the turn to "X"
  turn = "X";

  // Clear any game-over messages
  document.querySelector(".info").innerText = "Turn for X";

  // Reset any other game-related variables
  isgameover = false;

  // You can also reset the image width here if needed
  document.querySelector(".imgbox img").style.width = "0px";
});


