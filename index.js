
const {
  dashLine,
  newLine,
  COMP_VS_COMP,
  COMP_VS_PLAY,
  GAME_TYPE,
  USER_INPUT_TYPE,
  gameTypes,
  objWeapen,
  validateInput,
  compare,
  getCmdQues,
  getWeaponsStr,
  getInitChoice,
  computerGamble
} = require('./common');

/**
 * 
 * @param {*} result 
 * 
 * Prints the game last result
 */
const printResult = (result) => {
  console.log("RESULT: ", result);
}

/**
 * 
 * @param {*} gameType 
 * It will get the which type of game Comp vs comp || Comp vs person
 * it will continue the same game again depending upon user choice
 */
const continueToPlay = (gameType) => {
  getCmdQues(`${newLine} Do you want to play same game again? ${newLine} 1 - Yes ${newLine} Input any key for No ${newLine} ${dashLine} ${newLine}`)
  .then((userChoice) => {
    if (userChoice == 1) {
      runGame(gameType);
    } else {
      startGame();
    }
  });
}

/**
 * 
 * @param {*} computerChoice 
 * first computer choice
 */
const compVsCompGame = (computerChoice) => {
  printResult(compare(computerChoice, computerGamble(1)));
  continueToPlay(COMP_VS_COMP);
}

/**
 * 
 * @param {*} computerChoice 
 *  COMP radom seleted value
 * 
 */
const compVsPersonGame = (computerChoice) => {
  getCmdQues(`${newLine} ${dashLine} ${newLine} Player 2 Input your choice? ${newLine} ${getWeaponsStr()}  ${newLine} ${dashLine} ${newLine}`)
  .then((userChoice) => {
    if (validateInput(USER_INPUT_TYPE, userChoice)) {
      printResult(compare(computerChoice, objWeapen[userChoice]));
      continueToPlay(COMP_VS_PLAY);
    } else {
      continueToPlay(COMP_VS_PLAY);
    }
  });
}

/**
 * 
 * @param {*} userChoice 
 *  -- value will be contain user input number 1 2 or 3
 * 
 * According to choice of user it will start comp vs comp or comp vs use game
 */
const runGame = (userChoice) => {
  console.log(`${newLine}Playing ${gameTypes[userChoice].text} game.${newLine}`);
  let choice = computerGamble();
  if (userChoice === COMP_VS_PLAY) {
    compVsPersonGame(choice);
  } else {
    compVsCompGame(choice);
  }
};

/**
 * Get init question and validate the input. If input not valid then show the message
 * and again start game.
 */
const startGame = () => getCmdQues(getInitChoice()).then((userChoice) => {
  if (validateInput(GAME_TYPE, userChoice)) {
    runGame(userChoice);
  } else {
    startGame();
  }
});


// Starting point for game.
startGame();
