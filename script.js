"use strcit";

//CONSTANTS
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//SELECTING SEGMENTS
const numberSegment = document.querySelector(".number");
const messageSegment = document.querySelector(".message");
const showScore = document.querySelector(".score");
const showHighscore = document.querySelector(".highscore");
const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");

const displayMessage = function (message) {
  messageSegment.textContent = message;
};

checkButton.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    //WHEN THE PLAYER WINS
    displayMessage("🎉 Correct Number!");
    numberSegment.textContent = secretNumber;
    numberSegment.style.width = "30 rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      showHighscore.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    //WHEN THE GUESS IS NOT CORRECT
    if (score > 1) {
      //   if (guess > secretNumber) {
      //     displayMessage("Too High");
      //   } else if (guess < secretNumber) {
      //     displayMessage("Too Low");
      //   }
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      showScore.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector("body").style.backgroundColor = "#ba0000";
      showScore.textContent = 0;
    }
  }
});

againButton.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  numberSegment.textContent='?';
  showScore.textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  numberSegment.style.width = "15 rem";
});
