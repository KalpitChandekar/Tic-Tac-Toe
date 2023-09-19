let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X"; // Change "0" to "X" for the initial turn

// Function to change the turn
const changeTurn = () => {
  turn = turn === "X" ? "O" : "X"; // Update the turn variable
  return turn;
};

// Function to check for a win
const checkWin = () => {
  // Implement the win-checking logic here
};

// Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      changeTurn();
      audioTurn.play();
      checkWin(); // Call the checkWin function after each move
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
  });
});
