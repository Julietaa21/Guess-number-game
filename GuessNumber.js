"use strict";

console.log(
  document.querySelector(".message").textContent,
  "document.querySelector"
);

document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".guess").velue = 23000;
console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").teextContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = " No number!";
    displayMessage("No number");
  } else if (guess === secretNumber) {
    console.log(" You are the winner");
    document.querySelector(".message").textContent = " Correct Number!";
    displayMessage("correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b334";
    document.querySelector("body").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? " Too high!" : " Too LOw!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
const tryAgain = document.querySelector(".again");

tryAgain.addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = " 20";
  document.querySelector(".highscore").textContent = " 0";
});
