const readline = require('readline');

const dashLine = '---------------',
  newLine = '\n',
  COMP_VS_COMP = '1',
  COMP_VS_PLAY = '2',
  GAME_TYPE = 'GT',
  EXIT_GAME = '3',
  USER_INPUT_TYPE = 'UIT',
  gameTypes = {
    "1": {
      id: 1,
      text: 'Comp vs Comp'
    },
    "2": {
      id: 2,
      text: 'Comp vs Player'
    },
    [EXIT_GAME]: {
      id: EXIT_GAME,
      text: 'Exit Game'
    }
  },
  objWeapen = { '1': 'rock', '2': 'scissors', '3': 'paper' }

const validateInput = (type, choice) => {
  if (type === GAME_TYPE) {
    if (choice == EXIT_GAME) {
      console.log('Exiting game. Good byee !!!');
      process.exit();
    } else if (!gameTypes.hasOwnProperty(choice)) {
      console.log(`You selected wrong Game type choice. ${newLine}`);
      return false;
    }
  } else if (type == USER_INPUT_TYPE) {
    let validInput = Object.keys(objWeapen).includes(choice);
    if (!validInput) {
      console.log(`You selected wrong weapen from ${getWeaponsStr()} ${newLine}`);
      return false;
    }
  }

  return true;
}

const compare = (choice1, choice2) => {
  console.log(`${newLine} Player 1 chosen: ${choice1}`);
  console.log(` Player 2 chosen: ${choice2} ${newLine}`);

  if (choice1 == choice2) {
    if (choice1 == objWeapen[3]) {
      return `Players 1 and 2 whip out a sheet of paper. Nothing happens. TIE.`;
    }
    else if (choice1 == objWeapen[1]) {
      return "Players 1 and 2 smash rocks againts each other. They break. TIE.";
    }
    else if (choice1 == objWeapen[2]) {
      return "Players 1 and 2 attempt to cut each other's scissors. What? TIE.";
    }
    else if (choice1 === "undefined") {
      return "Player 1 and 2 give up. It's a Tie.";
    }
    else if (choice1 != objWeapen[1], objWeapen[2], objWeapen[3]) {
      return "Whatever a " + choice1 + " is, both players reveal one. Nothing happens.";
    }
  }
  else if (choice1 == objWeapen[1]) {
    if (choice2 == objWeapen[2]) {
      return "Player 1 annihilates Player 2's scissors with your rock: WIN";
    }
    else if (choice2 == objWeapen[3]) {
      return "Player 2 covers Player 1's rock with his paper: Player 2 WINS";
    }
    else if (choice2 != objWeapen[1], objWeapen[3], objWeapen[2]) {
      return "Player 2 chose " + choice2 + ". It does nothing. Player 1 wins.";
    }
  }
  else if (choice1 == objWeapen[3]) {
    if (choice2 == objWeapen[1]) {
      return "Player 1 covers Player 2's rock (somehow) rendering him useless: WIN";
    }
    else if (choice2 == objWeapen[2]) {
      return "Player 2 cuts Player 1's paper with his scissors: LOSE";
    }
    else if (choice2 != objWeapen[1], objWeapen[3], objWeapen[2]) {
      return "Player 2 chose " + choice2 + ". It does nothing. Player 1 wins.";
    }
  }
  else if (choice1 == objWeapen[2]) {
    if (choice2 == objWeapen[3]) {
      return "Player 1 cuts Player 2's paper down the middle: WIN";
    }
    else if (choice2 == objWeapen[1]) {
      return "Player 2 destroys Player 1's scissors with a rock: LOSE";
    }
    else if (choice2 != objWeapen[1], objWeapen[3], objWeapen[2]) {
      return "Player 2 chose " + choice2 + ". It does nothing. Player 1 wins.";
    }
  }
  else if (choice1 != objWeapen[1], objWeapen[3], objWeapen[2]) {
    return "Player 1 chose " + choice1 + ". It does nothing. Player 2 wins.";
  }
}

const getCmdQues = (ques) => {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(ques, (choice) => {
      rl.close();
      resolve(choice);
    });
  })
}

const getWeaponsStr = () => {
  let weapenStr = `Select ${newLine}`;
  Object.keys(objWeapen).map((key) => {
    weapenStr += ` ${key} for ${objWeapen[key]} ${newLine}`;
  });
  return weapenStr;
};

const getInitChoice = () => {
  let choiceString = `Select type of Game? ${newLine} ${dashLine}`;
  Object.keys(gameTypes).map((id) => {
    let game = gameTypes[id];
    choiceString += `\n ${game.id} - ${game.text}`;
  });

  return `${choiceString} ${newLine} ${dashLine} ${newLine}`;
}

const getRandomNumber = () => Math.random();

const computerGamble = (type = 0) => {
  paperDiceMin = 0.22;
  paperDiceMax = 0.69;
  if (type) {
    paperDiceMin = 0.22;
    paperDiceMax = 0.69;
  }

  let dice = getRandomNumber();
  if (dice <= 0.33) {
    return objWeapen[1];
  } else if (dice > 0.33 && dice <= 0.66) {
    return objWeapen[3];
  } else {
    return objWeapen[2];
  }
}

module.exports = {
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
}