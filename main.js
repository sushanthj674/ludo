const ludoBigLetters = "\n\n\t||         || ||     ||||       |||| \n" +
  "\t||         || ||     ||  ||    ||  ||\n" +
  "\t||         || ||     ||  ||    ||  ||\n" +
  "\t|||||      |||||     ||||       |||| ";

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

let greenHeartpos = -1;
let blueHeartpos = -1;
let yellowHeartpos = -1;
let whiteHeartpos = -1;

let greenCirclepos = -1;
let blueCirclepos = -1;
let yellowCirclepos = -1;
let whiteCirclepos = -1;

let diceVal = 0;

let box = '\n┏━━━━━━━━━━━━━━━━━━━┳━━━━┯━━━━┯━━━━┳━━━━━━━━━━━━━━━━━━━┓\n┃ ┏━━━━━━━━━━━━━━━━┓┃    ┆    ┆    ┃┏━━━━━━━━━━━━━━━━┓ ┃\n┃ ┃                ┃┃┄┄┄┄┟━━━━┪┄┄┄┄┃┃                ┃ ┃\n┃ ┃    ' + blueCircle + '    ' + blueHeart + '    ┃┃    ┃    ┃    ┃┃    ' + yellowCircle + '    ' + yellowHeart + '    ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┃                ┃┃    ┃    ┃    ┃┃                ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┗━━━━━━━━━━━━━━━━┛┃    ┃    ┃    ┃┗━━━━━━━━━━━━━━━━┛ ┃\n┣━━━━┯━━━━┯━━━━┯━━━━╋━━━━┻━━━━┻━━━━╋━━━━┯━━━━┯━━━━┯━━━━┫\n┃    ┆    ┆    ┆    ┃              ┃    ┆    ┆    ┆    ┃ \n┃┄┄┄┄┟━━━━╈━━━━╈━━━━┫              ┣━━━━╈━━━━╈━━━━┪┄┄┄┄┃\n┃    ┃    ┃    ┃    ┃              ┃    ┃    ┃    ┃    ┃\n┃┄┄┄┄┡━━━━╇━━━━╇━━━━┫              ┣━━━━╇━━━━╇━━━━╇┄┄┄┄┃\n┃    ┆    ┆    ┆    ┃              ┃    ┆    ┆    ┆    ┃\n┣━━━━┷━━━━┷━━━━┷━━━━╋━━━━┳━━━━┳━━━━╋━━━━┷━━━━┷━━━━┷━━━━┫\n┃ ┏━━━━━━━━━━━━━━━━┓┃    ┃    ┃    ┃┏━━━━━━━━━━━━━━━━┓ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┃    ' + whiteCircle + '    ' + whiteHeart + '    ┃┃    ┃    ┃    ┃┃    ' + greenCircle + '    ' + greenHeart + '    ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┃                ┃┃    ┃    ┃    ┃┃                ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┡━━━━╇┄┄┄┄┃┃                ┃ ┃\n┃ ┗━━━━━━━━━━━━━━━━┛┃    ┆    ┆    ┃┗━━━━━━━━━━━━━━━━┛ ┃\n┗━━━━━━━━━━━━━━━━━━━┻━━━━┷━━━━┷━━━━┻━━━━━━━━━━━━━━━━━━━┛';
// ----------------------------------------------------------------------
function rollADice() {
  return Math.ceil(Math.random() * 6);
}
// ----------------------------------------------------------------------
function printBox() {
  console.clear(); 
  console.log(ludoBigLetters);
  if (diceVal !== 0) {
    console.log("\nyou got !!! " + diceVal);
  }
  console.log(box);
}
// ----------------------------------------------------------------------
function updateTokenPos(token, position) {
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
// ----------------------------------------------------------------------
function getInitialPos(token) {
  switch (token) {
    case blueCircle:
      return 179;
    case blueHeart:
      return 185;
    case yellowCircle:
      return 213;
    case yellowHeart:
      return 219;
    case greenCircle:
      return 1012;
    case greenHeart:
      return 1018;
    case whiteHeart:
      return 984;
    case whiteCircle:
      return 978;
  }
}
// ----------------------------------------------------------------------
function isTokenHeart(token) {
  return token === '💙' || token === '💛' || token === '💚' || token === '🤍';
}
// ----------------------------------------------------------------------
function getCellAdderss(addressBook, cellNumber) {
  let address = '';
  const start = cellNumber * 5;
  for (let i = start; i < start + 4; i++) {
    address += addressBook[i];
  }

  return +address;
}
// ----------------------------------------------------------------------
function killIfTokenInDestination(address, path, otherTokenPath, otherTokenPos, otherToken) {
  if (path !== otherTokenPath && address === getCellAdderss(otherTokenPath, otherTokenPos)) {
    updateTokenPos(otherToken, -1);
    let currentIndex = box.lastIndexOf(otherToken);
    currentIndex -= isTokenHeart(otherToken) ? 2 : 0;
    moveToken(currentIndex, getInitialPos(otherToken), otherToken);
  }
}
// ----------------------------------------------------------------------
function CheckForKill(colorPath, nextPosition) {

  const movingAddress = getCellAdderss(colorPath, nextPosition);
  killIfTokenInDestination(movingAddress, colorPath, greenPath, greenCirclepos, greenCircle);
  killIfTokenInDestination(movingAddress, colorPath, greenPath, greenHeartpos, greenHeart);
  killIfTokenInDestination(movingAddress, colorPath, yellowPath, yellowCirclepos, yellowCircle);
  killIfTokenInDestination(movingAddress, colorPath, yellowPath, yellowHeartpos, yellowHeart);
  killIfTokenInDestination(movingAddress, colorPath, bluePath, blueCirclepos, blueCircle);
  killIfTokenInDestination(movingAddress, colorPath, bluePath, blueHeartpos, blueHeart);
  killIfTokenInDestination(movingAddress, colorPath, whitePath, whiteCirclepos, whiteCircle);
  killIfTokenInDestination(movingAddress, colorPath, whitePath, whiteHeartpos, whiteHeart);
}
// ----------------------------------------------------------------------
function moveToken(currentPosition, nextPosition, replacement) {
  let newBox = "";
  let space = isTokenHeart(replacement) ? -2 : 0;

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
// ----------------------------------------------------------------------
function executeToken(tokenPosition, path, token) {
  if (tokenPosition + diceVal <= 38) {

    tokenPosition += tokenPosition === -1 ? 1 : diceVal;
    updateTokenPos(token, tokenPosition);
    const currentPos = getCellAdderss(path, tokenPosition);
    const isSafePoint = currentPos === 520 || currentPos === 203 || currentPos === 789 || currentPos === 1106;
    if (!isSafePoint) {
      CheckForKill(path, tokenPosition);
    }
    let currentIndex = box.lastIndexOf(token);
    currentIndex -= isTokenHeart(token) ? 2 : 0;
    moveToken(currentIndex, currentPos, token);
  }
}
// ----------------------------------------------------------------------
function executeColor(circlePos, heartPos, path, HeartToken, circleToken) {
  if (circlePos === -1 && diceVal !== 6) {
    if (heartPos === -1) {
      return '';
    }
    return executeToken(heartPos, path, HeartToken);
  }

  if (heartPos === -1 && diceVal !== 6) {
    if (circlePos === -1) {
      return '';
    }
    return executeToken(circlePos, path, circleToken);
  }

  if (circlePos + diceVal <= 38 && heartPos + diceVal <= 38) {
    if (confirm(" press 'Y' to move heart ")) {
      return executeToken(heartPos, path, HeartToken);
    } else {
      return executeToken(circlePos, path, circleToken);
    }

  } else if (circlePos + diceVal <= 38 || heartPos + diceVal <= 38) {
    if (circlePos + diceVal <= 38) {
      return executeToken(circlePos, path, circleToken);
    } else {
      return executeToken(heartPos, path, HeartToken);
    }

  }
}
// ----------------------------------------------------------------------
let recursionControlVar = 0;
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
  printBox();
  if (recursionControlVar % 4 === 1) {

    prompt("Blue choice press ENTER to roll dice");
    executeColor(blueCirclepos, blueHeartpos, bluePath, blueHeart, blueCircle);
  } else if (recursionControlVar % 4 === 2) {

    prompt("yellow choice press ENTER to roll dice");
    executeColor(yellowCirclepos, yellowHeartpos, yellowPath, yellowHeart, yellowCircle);

  } else if (recursionControlVar % 4 === 3) {

    prompt("green choice press ENTER to roll dice");
    executeColor(greenCirclepos, greenHeartpos, greenPath, greenHeart, greenCircle);
  } else if (recursionControlVar % 4 === 0) {

    prompt("white choice press ENTER to roll dice");
    executeColor(whiteCirclepos, whiteHeartpos, whitePath, whiteHeart, whiteCircle);
  }
  recursionControlVar += 1;
  return gameCore();
}
console.log(gameCore());
