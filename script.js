// Logics of Rock Paper Scissor Game :-

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#message");

const userScorePara = document.querySelector("#player-score");
const compScorePara = document.querySelector("#computer-score");

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
  // Reset scores
  userScore = 0;
  compScore = 0;

  // Update score display
  userScorePara.innerText = `Player Score: ${userScore}`;
  compScorePara.innerText = `Computer Score: ${compScore}`;

  // Reset message display
  mess.innerText = "Play your move";
  mess.style.backgroundColor = "#081b31";
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was Draw!");
  mess.innerText = "Game was Draw..Play Again!";
  mess.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("You Win!");
    userScore++;
    userScorePara.innerText = `Player Score: ${userScore}`;
    mess.innerText = `You win! Yours ${userChoice} beats ${compChoice}`;
    mess.style.backgroundColor = "green";
  } else {
    // console.log("You lose");
    compScore++;
    compScorePara.innerText = `Computer Score: ${compScore}`;
    mess.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    mess.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice =", userChoice);
  //Generate conputer choice -->Modilar way of pogramming
  const compChoice = genCompChoice();
  console.log("Computer Choice =", compChoice);

  if (userChoice === compChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock or scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked!",userChoice);
    playGame(userChoice);
  });
});
