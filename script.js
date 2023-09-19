let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "x";


const changeturn = () => {
  return turn === "x" ? "0" : "X";
};
