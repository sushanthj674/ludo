const ludoBigLetters = "\n\n\t||      |  || ||  |  ||||    |  |||| \n" +
  "\t||      |  || ||  |  ||  ||  | ||  ||\n" +
  "\t||      |  || ||  |  ||  ||  | ||  ||\n" +
  "\t|||||   |  |||||  |  ||||    |  |||| ";

const pathIndex = '0520-0525-0530-0421-0307-0193-0079-0084-0089-0203-0317-0431-0550-0555-0560-0565-0680-0794-0789-0784-0779-0888-1002-1116-1230-1225-1220-1106-0992-0878-0759-0754-0749-0744-0630-0515-0656';
const bluePath = '0520-0525-0530-0421-0307-0193-0079-0084-0089-0203-0317-0431-0550-0555-0560-0565-0680-0794-0789-0784-0779-0888-1002-1116-1230-1225-1220-1106-0992-0878-0759-0754-0749-0744-0630-0635-0640-0645-0651';
const yellowPath = '0203-0317-0431-0550-0555-0560-0565-0680-0794-0789-0784-0779-0888-1002-1116-1230-1225-1220-1106-0992-0878-0759-0754-0749-0744-0630-0515-0520-0525-0530-0421-0307-0193-0079-0084-0198-0312-0426-0538';
const greenPath = '0789-0784-0779-0888-1002-1116-1230-1225-1220-1106-0992-0878-0759-0754-0749-0744-0630-0515-0520-0525-0530-0421-0307-0193-0079-0084-0089-0203-0317-0431-0550-0555-0560-0565-0680-0675-0670-0665-0659';
const whitePath = '1106-0992-0878-0759-0754-0749-0744-0630-0515-0520-0525-0530-0421-0307-0193-0079-0084-0089-0203-0317-0431-0550-0555-0560-0565-0680-0794-0789-0784-0779-0888-1002-1116-1230-1225-1111-0997-0883-0768';

const blueCircle = '🔵';
const blueHeart = '💙';

const yellowCircle = '🟡';
const yellowHeart = '💛';

const greenCircle = '🟢';
const greenHeart = '💚';

const whiteCircle = '⚪️';
const whiteHeart = '🤍';

const blueHeartInitialpos = 185;
const yellowHeartInitialpos = 219;

const greenHeartInitialpos = 1018;
const whiteHeartInitialpos = 984;

const blueCircleInitialpos = 179;
const yellowCircleInitialpos = 213;

const greenCircleInitialpos = 1012;
const whiteCircleInitialpos = 978;

let greenHeartpos = -1;
let blueHeartpos = -1;
let yellowHeartpos = -1;
let whiteHeartpos = -1;

let greenCirclepos = -1;
let blueCirclepos = -1;
let yellowCirclepos = -1;
let whiteCirclepos = -1;

let greenScore = 0;
let yellowScore = 0;
let blueScore = 0;
let whiteScore = 0;

let recursionControlVar = 0;

let box = '\n┏━━━━━━━━━━━━━━━━━━━┳━━━━┯━━━━┯━━━━┳━━━━━━━━━━━━━━━━━━━┓\n┃ ┏━━━━━━━━━━━━━━━━┓┃    ┆    ┆    ┃┏━━━━━━━━━━━━━━━━┓ ┃\n┃ ┃                ┃┃┄┄┄┄┟━━━━┪┄┄┄┄┃┃                ┃ ┃\n┃ ┃    ' + blueCircle + '    ' + blueHeart + '    ┃┃    ┃    ┃    ┃┃    ' + yellowCircle + '    ' + yellowHeart + '    ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┃                ┃┃    ┃    ┃    ┃┃                ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┗━━━━━━━━━━━━━━━━┛┃    ┃    ┃    ┃┗━━━━━━━━━━━━━━━━┛ ┃\n┣━━━━┯━━━━┯━━━━┯━━━━╋━━━━┻━━━━┻━━━━╋━━━━┯━━━━┯━━━━┯━━━━┫\n┃    ┆    ┆    ┆    ┃              ┃    ┆    ┆    ┆    ┃ \n┃┄┄┄┄┟━━━━╈━━━━╈━━━━┫              ┣━━━━╈━━━━╈━━━━┪┄┄┄┄┃\n┃    ┃    ┃    ┃    ┃              ┃    ┃    ┃    ┃    ┃\n┃┄┄┄┄┡━━━━╇━━━━╇━━━━┫              ┣━━━━╇━━━━╇━━━━╇┄┄┄┄┃\n┃    ┆    ┆    ┆    ┃              ┃    ┆    ┆    ┆    ┃\n┣━━━━┷━━━━┷━━━━┷━━━━╋━━━━┳━━━━┳━━━━╋━━━━┷━━━━┷━━━━┷━━━━┫\n┃ ┏━━━━━━━━━━━━━━━━┓┃    ┃    ┃    ┃┏━━━━━━━━━━━━━━━━┓ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┃    ' + whiteCircle + '    ' + whiteHeart + '    ┃┃    ┃    ┃    ┃┃    ' + greenCircle + '    ' + greenHeart + '    ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┃                ┃┃    ┃    ┃    ┃┃                ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┡━━━━╇┄┄┄┄┃┃                ┃ ┃\n┃ ┗━━━━━━━━━━━━━━━━┛┃    ┆    ┆    ┃┗━━━━━━━━━━━━━━━━┛ ┃\n┗━━━━━━━━━━━━━━━━━━━┻━━━━┷━━━━┷━━━━┻━━━━━━━━━━━━━━━━━━━┛';

function rollADice() {
  return Math.ceil(Math.random() * 6);
}

function printBox() {
  console.clear();
  console.log(ludoBigLetters);
  if (diceVal !== 0) {
    console.log("\nyou got !!! " + diceVal);
  }
  console.log(box);
}

function isTokenHeart(token) {
  return token === '💙' || token === '💛' || token === '💚' || token === '🤍';
}

function getCellAdderss(addressBook, cellNumber) {
  let address = '';
  const start = cellNumber * 5;
  for (let i = start; i < start + 4; i++) {
    address += addressBook[i];
  }

  return +address;
}

function CheckAndKill(colorAddressBook, nextPosition) {
  const movingAddress = getCellAdderss(colorAddressBook, nextPosition);
  if (colorAddressBook !== greenPath && movingAddress === getCellAdderss(greenPath, greenCirclepos)) {
    greenCirclepos = -1;
    moveToken(movingAddress, greenCircleInitialpos, greenCircle);
  } else if (colorAddressBook !== greenPath && movingAddress === getCellAdderss(greenPath, greenHeartpos)) {
    greenHeartpos = -1;
    moveToken(box.lastIndexOf(greenHeart) - 2, greenHeartInitialpos, greenHeart);
  } else if (colorAddressBook !== yellowPath && movingAddress === getCellAdderss(yellowPath, yellowHeartpos)) {
    yellowHeartpos = -1;
    moveToken(box.lastIndexOf(yellowHeart) - 2, yellowHeartInitialpos, yellowHeart);
  } else if (colorAddressBook !== yellowPath && movingAddress === getCellAdderss(yellowPath, yellowCirclepos)) {
    yellowCirclepos = -1;
    moveToken(movingAddress, yellowCircleInitialpos, yellowCircle);
  } else if (colorAddressBook !== whitePath && movingAddress === getCellAdderss(whitePath, whiteHeartpos)) {
    whiteHeartpos = -1;
    moveToken(box.lastIndexOf(whiteHeart) - 2, whiteHeartInitialpos, whiteHeart);
  } else if (colorAddressBook !== whitePath && movingAddress === getCellAdderss(whitePath, whiteCirclepos)) {
    whiteCirclepos = -1;
    moveToken(movingAddress, whiteCircleInitialpos, whiteCircle);
  } else if (colorAddressBook !== bluePath && movingAddress === getCellAdderss(bluePath, blueHeartpos)) {
    blueHeartpos = -1;
    moveToken(box.lastIndexOf(blueHeart) - 2, blueHeartInitialpos, blueHeart);
  } else if (colorAddressBook !== bluePath && movingAddress === getCellAdderss(bluePath, blueCirclepos)) {
    blueCirclepos = -1;
    moveToken(movingAddress, blueCircleInitialpos, blueCircle);
  }
}


function moveToken(currentPosition, nextPosition, replacement) {
  let newBox = "";
  let space = 0;
  if (replacement === '💙' || replacement === '💛' || replacement === '💚' || replacement === '🤍') {
    space -= 2;
  }
  for (let index = 0; index < box.length; index += 1) {

    if (index + space === currentPosition || index + space === currentPosition + 1) {
      newBox += " ";
    } else if (index + space === nextPosition || index + space === nextPosition + 1) {
      newBox += index + space === nextPosition ? replacement[0] : replacement[1];
    } else {
      newBox += box[index];
    }
  }

  box = newBox;
}

let diceVal = 0;
// ----------------------------------------------------------------------
function executeBlue() {
  if (blueCirclepos === -1 && diceVal !== 6) {
    if (blueHeartpos === -1) {
      return '';
    }
    return executeToken(blueHeartpos, bluePath, blueHeart);
  }
  if (blueHeartpos === -1 && diceVal !== 6) {
    if (blueCirclepos === -1) {
      return '';
    }
    return executeToken(blueCirclepos, bluePath, blueCircle);
  }

  if (blueCirclepos + diceVal <= 38 && blueHeartpos + diceVal <= 38) {
    if (confirm(" press 'Y' to move heart ")) {
      return executeToken(blueHeartpos, bluePath, blueHeart);
    } else {
      return executeToken(blueCirclepos, bluePath, blueCircle);
    }

  } else if (blueCirclepos + diceVal <= 38 || blueHeartpos + diceVal <= 38) {
    if (blueCirclepos + diceVal <= 38) {
      return executeToken(blueCirclepos, bluePath, blueCircle);
    } else {
      return executeToken(blueHeartpos, bluePath, blueHeart);
    }
  }

}

function executeYellow() {
  if (yellowCirclepos === -1 && diceVal !== 6) {
    if (yellowHeartpos === -1) {
      return '';
    }
    return executeToken(yellowHeartpos, yellowPath, yellowHeart);
  }
  if (yellowHeartpos === -1 && diceVal !== 6) {
    if (yellowCirclepos === -1) {
      return '';
    }
    return executeToken(yellowCirclepos, yellowPath, yellowCircle);
  }

  if (yellowCirclepos + diceVal <= 38 && yellowHeartpos + diceVal <= 38) {
    if (confirm(" press 'Y' to move heart ")) {
      return executeToken(yellowHeartpos, yellowPath, yellowHeart);
    } else {
      return executeToken(yellowCirclepos, yellowPath, yellowCircle);
    }

  } else if (yellowCirclepos + diceVal <= 38 || yellowHeartpos + diceVal <= 38) {
    if (yellowCirclepos + diceVal <= 38) {
      return executeToken(yellowCirclepos, yellowPath, yellowCircle);
    } else {
      return executeToken(yellowHeartpos, yellowPath, yellowHeart);
    }
  }
}

function executeToken(tokenPosition, path, token) {
  if (tokenPosition + diceVal <= 38) {

    tokenPosition += tokenPosition === -1 ? 1 : diceVal;
    updateTokenPos(token, tokenPosition);
    const currentPos = getCellAdderss(path, tokenPosition);

    CheckAndKill(path, tokenPosition);
    let currentIndex = box.lastIndexOf(token);
    currentIndex -= isTokenHeart(token) ? 2 : 0;
    moveToken(currentIndex, currentPos, token);
  }
}

function updateTokenPos(token, position) {
  console.log(ludoBigLetters);

  switch (token) {
    case blueCircle:
      blueCirclepos = position;
      break;
    case blueHeart:
      blueHeartpos = position;
      break;
    case yellowCircle:
      yellowCirclepos = position;
      break;
    case yellowHeart:
      yellowHeartpos = position;
      break;
    case greenCircle:
      greenCirclepos = position;
      break;
    case greenHeart:
      greenHeartpos = position;
      break;
    case whiteHeart:
      whiteHeartpos = position;
      break;
    case whiteCircle:
      whiteCirclepos = position;
      break;
  }
}

function executeWhite() {
  if (whiteCirclepos === -1 && diceVal !== 6) {
    if (whiteHeartpos === -1) {
      return '';
    }
    return executeToken(whiteHeartpos, whitePath, whiteHeart);
  }
  if (whiteHeartpos === -1 && diceVal !== 6) {
    if (whiteCirclepos === -1) {
      return '';
    }
    return executeToken(whiteCirclepos, whitePath, whiteCircle);
  }

  if (whiteCirclepos + diceVal <= 38 && whiteHeartpos + diceVal <= 38) {
    if (confirm(" press 'Y' to move heart ")) {
      // return executeWhiteHeart();
      return executeToken(whiteHeartpos, whitePath, whiteHeart);
    } else {
      // return executeWhiteCircle();
      return executeToken(whiteCirclepos, whitePath, whiteCircle);

    }

  } else if (whiteCirclepos + diceVal <= 38 || whiteHeartpos + diceVal <= 38) {
    if (whiteCirclepos + diceVal <= 38) {
      return executeToken(whiteCirclepos, whitePath, whiteCircle);
    } else {
      return executeToken(whiteHeartpos, whitePath, whiteHeart);
    }
  }

}

// ----------------------------------------------------------------------
function executeGreen() {
  if (greenCirclepos === -1 && diceVal !== 6) {
    if (greenHeartpos === -1) {
      return '';
    }
    return executeToken(greenHeartpos, greenPath, greenHeart);
  }
  if (greenHeartpos === -1 && diceVal !== 6) {
    if (greenCirclepos === -1) {
      return '';
    }
    return executeToken(greenCirclepos, greenPath, greenCircle);
  }
  if (greenCirclepos + diceVal <= 38 && greenHeartpos + diceVal <= 38) {
    if (confirm(" press 'Y' to move heart ")) {
      return executeToken(greenHeartpos, greenPath, greenHeart);
    } else {
      return executeToken(greenCirclepos, greenPath, greenCircle);
    }

  } else if (greenCirclepos + diceVal <= 38 || greenHeartpos + diceVal <= 38) {
    if (greenCirclepos + diceVal <= 38) {
      return executeToken(greenCirclepos, greenPath, greenCircle);
    } else {
      return executeToken(greenHeartpos, greenPath, greenHeart);
    }
  }

}
function gameCore() {
  printBox();
  if (greenHeartpos === 38 && greenCirclepos === 38) {
    return 'green won🏆 the match🎉🥳';
  } else if (yellowHeartpos === 38 && yellowCirclepos === 38) {
    return 'yellow won🏆 the match🎉🥳';
  } else if (blueHeartpos === 38 && blueCirclepos === 38) {
    return 'blue won🏆 the match🎉🥳';
  } else if (whiteHeartpos === 38 && whiteCirclepos === 38) {
    return 'white won🏆 the match🎉🥳';
  }

  diceVal = rollADice();

  if (recursionControlVar % 4 === 1) {
    prompt("Blue choice press ENTER to roll dice");
    executeBlue();
  } else if (recursionControlVar % 4 === 2) {
    prompt("yellow choice press ENTER to roll dice");
    printBox();

    executeYellow();
  } else if (recursionControlVar % 4 === 3) {
    prompt("green choice press ENTER to roll dice");
    printBox();

    executeGreen();
  } else if (recursionControlVar % 4 === 0) {
    prompt("white choice press ENTER to roll dice");
    printBox();

    executeWhite();
  }
  recursionControlVar += 1;
  return gameCore();
}
console.log(gameCore());
