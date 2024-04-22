// Rock, Paper, Scissors: Refactored with Functions
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};

// Game flow function
const playGame = () => {
  while (true) {
    let BingusChoice = getBingusChoice();
    BingusChoice = formatBingusChoice(BingusChoice);
    if (BingusChoice === "") {
      invalidChoice();
      continue;
    }
    if (!BingusChoice) {
      decidedNotToPlay();
      break;
    }
    BingusChoice = evaluateBingusChoice(BingusChoice);
    if (!BingusChoice) {
      invalidChoice();
      continue;
    }
    const BongusChoice = getBongusChoice();
    const result = determineWinner(BingusChoice, BongusChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getBingusChoice = () => {
  return prompt("Please enter rock, paper, or scissors.");
};

const formatBingusChoice = (BingusChoice) => {
  if (BingusChoice || BingusChoice === "") {
    return BingusChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
};

const evaluateBingusChoice = (BingusChoice) => {
  if (
    BingusChoice === "rock" ||
    BingusChoice === "paper" ||
    BingusChoice === "scissors"
  ) {
    return BingusChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.");
};

const getBongusChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (Bingus, Bongus) => {
  const winner =
    Bingus === Bongus
      ? "Tie game!"
      : Bingus === "rock" && Bongus === "paper"
      ? `BingusOne: ${Bingus}\nBongus: ${Bongus}\nBongus wins!`
      : Bingus === "paper" && Bongus === "scissors"
      ? `BingusOne: ${Bingus}\nBongus: ${Bongus}\nBongus wins!`
      : Bingus === "scissors" && Bongus === "rock"
      ? `BingusOne: ${Bingus}\nBongus: ${Bongus}\nBongus wins!`
      : `BingusOne: ${Bingus}\nBongus: ${Bongus}\nBingusOne wins!`;

  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play Again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};

initGame();