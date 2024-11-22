const ludoBigLetters = "\tL       |  U   U | DDDD    | OOOO \n" +
"\tL       |  U   U | D    D  | O  O\n" +
"\tL       |  U   U | D    D  | O  O\n" +
"\tLLLLL   |  UUUUU | DDDD    | OOOO ";

const pathIndex = '0520-0525-0530-0421-0307-0193-0079-0084-0089-0203-0317-0431-0550-0555-0560-0565-0680-0794-0789-0784-0779-0888-1002-1116-1230-1225-1220-1106-0992-0878-0759-0754-0749-0744-0630-0515-0656';
const bluePath = '0520-0525-0530-0421-0307-0193-0079-0084-0089-0203-0317-0431-0550-0555-0560-0565-0680-0794-0789-0784-0779-0888-1002-1116-1230-1225-1220-1106-0992-0878-0759-0754-0749-0744-0630-0635-0640-0645-0651';
const yellowPath = '0203-0317-0431-0550-0555-0560-0565-0680-0794-0789-0784-0779-0888-1002-1116-1230-1225-1220-1106-0992-0878-0759-0754-0749-0744-0630-0515-0520-0525-0530-0421-0307-0193-0079-0084-0198-0312-0426-0538';
const greenPath = '0789-0784-0779-0888-1002-1116-1230-1225-1220-1106-0992-0878-0759-0754-0749-0744-0630-0515-0520-0525-0530-0421-0307-0193-0079-0084-0089-0203-0317-0431-0550-0555-0560-0565-0680-0675-0670-0665-0659';
const whitePath = '1106-0992-0878-0759-0754-0749-0744-0630-0515-0520-0525-0530-0421-0307-0193-0079-0084-0089-0203-0317-0431-0550-0555-0560-0565-0680-0794-0789-0784-0779-0888-1002-1116-1230-1225-1111-0997-0883-0768';

const blueCircle = '🔵';
const blueHeart = '💙';
const blueSquare = '🟦';
const blueAnimal = '🪼';

const yellowCircle = '🟡';
const yellowHeart = '💛';
const yellowSquare = '🟨';
const yellowAnimal = '🐥';

const greenCircle = '🟢';
const greenHeart = '💚';
const greenSquare = '🟩';
const greenAnimal = '🐢';

const whiteCircle = '⚪️';
const whiteHeart = '🤍';
const whiteSquare = '⬜️';
const whiteAnimal = '🐼';

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
let blueC = "  ";
let blueH = "  ";
let blueS = "  ";
let blueA = "  ";

let yellowC = "  ";
let yellowH = "  ";
let yellowS = "  ";
let yellowA = "  ";

let whiteC = "  ";
let whiteH = "  ";
let whiteS = "  ";
let whiteA = "  ";

let greenC = "  ";
let greenH = "  ";
let greenS = "  ";
let greenA = "  ";

blueC = blueCircle;
blueH = blueHeart;
blueS = blueSquare;
blueA = blueAnimal;

yellowC = yellowCircle;
yellowH = yellowHeart;
yellowS = yellowSquare;
yellowA = yellowAnimal;

whiteC = whiteCircle;
whiteH = whiteHeart;
whiteS = whiteSquare;
whiteA = whiteAnimal;

greenC = greenCircle;
greenH = greenHeart;
greenS = greenSquare;
greenA = greenAnimal;
let box =`
┏━━━━━━━━━━━━━━━━━━━┳━━━━┯━━━━┯━━━━┳━━━━━━━━━━━━━━━━━━━┓
┃ ┏━━━━━━━━━━━━━━━━┓┃    ┆    ┆    ┃┏━━━━━━━━━━━━━━━━┓ ┃
┃ ┃                ┃┃┄┄┄┄┟━━━━┪┄┄┄┄┃┃                ┃ ┃
┃ ┃    ` + blueC + `    ` + blueH + `    ┃┃    ┃    ┃    ┃┃    ` + yellowC + `    ` + yellowH + `    ┃ ┃
┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃
┃ ┃    ` + blueS + `    ` + blueA + `    ┃┃    ┃    ┃    ┃┃    ` + yellowS + `    ` + yellowA + `    ┃ ┃
┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃
┃ ┗━━━━━━━━━━━━━━━━┛┃    ┃    ┃    ┃┗━━━━━━━━━━━━━━━━┛ ┃
┣━━━━┯━━━━┯━━━━┯━━━━╋━━━━┻━━━━┻━━━━╋━━━━┯━━━━┯━━━━┯━━━━┫
┃    ┆    ┆    ┆    ┃              ┃    ┆    ┆    ┆    ┃ 
┃┄┄┄┄┟━━━━╈━━━━╈━━━━┫              ┣━━━━╈━━━━╈━━━━┪┄┄┄┄┃
┃    ┃    ┃    ┃    ┃              ┃    ┃    ┃    ┃    ┃
┃┄┄┄┄┡━━━━╇━━━━╇━━━━┫              ┣━━━━╇━━━━╇━━━━╇┄┄┄┄┃
┃    ┆    ┆    ┆    ┃              ┃    ┆    ┆    ┆    ┃
┣━━━━┷━━━━┷━━━━┷━━━━╋━━━━┳━━━━┳━━━━╋━━━━┷━━━━┷━━━━┷━━━━┫
┃ ┏━━━━━━━━━━━━━━━━┓┃    ┃    ┃    ┃┏━━━━━━━━━━━━━━━━┓ ┃
┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃
┃ ┃    ` + whiteC + `    ` + whiteH + `    ┃┃    ┃    ┃    ┃┃    ` + greenC + `    ` + greenH + `    ┃ ┃
┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃
┃ ┃    ` + whiteS + `    ` + whiteA + `    ┃┃    ┃    ┃    ┃┃    ` + greenS + `    ` + greenA + `    ┃ ┃
┃ ┃                ┃┃┄┄┄┄┡━━━━╇┄┄┄┄┃┃                ┃ ┃
┃ ┗━━━━━━━━━━━━━━━━┛┃    ┆    ┆    ┃┗━━━━━━━━━━━━━━━━┛ ┃
┗━━━━━━━━━━━━━━━━━━━┻━━━━┷━━━━┷━━━━┻━━━━━━━━━━━━━━━━━━━┛`;

function rollADice() {
  return Math.ceil(Math.random() * 6);
}
function printBox() {
  console.log(box);
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
    moveto(movingAddress, greenCircleInitialpos,greenCircle);
  } else if (colorAddressBook !== greenPath && movingAddress === getCellAdderss(greenPath, greenHeartpos)) {
    greenHeartpos = -1;
    moveto(box.lastIndexOf(greenHeart) - 2, greenHeartInitialpos,greenHeart);
  } else if (colorAddressBook !== yellowPath && movingAddress === getCellAdderss(yellowPath, yellowHeartpos)) {
    yellowHeartpos = -1;
    moveto(box.lastIndexOf(yellowHeart) - 2, yellowHeartInitialpos,yellowHeart);
  } else if (colorAddressBook !== yellowPath && movingAddress === getCellAdderss(yellowPath, yellowCirclepos)) {
    yellowCirclepos = -1;
    moveto(movingAddress, yellowCircleInitialpos,yellowCircle);
  } else if (colorAddressBook !== whitePath && movingAddress === getCellAdderss(whitePath, whiteHeartpos)) {
    whiteHeartpos = -1;
    moveto(box.lastIndexOf(whiteHeart) -2, whiteHeartInitialpos,whiteHeart);
  } else if (colorAddressBook !== whitePath && movingAddress === getCellAdderss(whitePath, whiteCirclepos)) {
    whiteCirclepos = -1;
    moveto(movingAddress, whiteCircleInitialpos,whiteCircle);
  } else if (colorAddressBook !== bluePath && movingAddress === getCellAdderss(bluePath, blueHeartpos)) {
    blueHeartpos = -1;
    moveto(box.lastIndexOf(blueHeart) - 2, blueHeartInitialpos,blueHeart);
  } else if (colorAddressBook !== bluePath && movingAddress === getCellAdderss(bluePath, blueCirclepos)) {
    blueCirclepos = -1;
    moveto(movingAddress, blueCircleInitialpos,blueCircle);
  }
}

function validateScores() {
  greenScore = (greenCirclepos + greenHeartpos) / 2;
  yellowScore = (yellowCirclepos + yellowHeartpos) / 2;
  blueScore = (blueCirclepos + blueHeartpos) / 2;
  whiteScore = (whiteCirclepos + whiteHeartpos) / 2;
}

function moveto(currentPosition, nextPosition, replacement) {
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


function are2PawnsIn(circlePos, heartPos, symbol, path) {
  if (circlePos === -1 && heartPos === -1) {
    blueC = '  ';
    console.log(path);
    moveto(box.lastIndexOf(symbol), getCellAdderss(path, 0), symbol);
    return true;
  }

  return false;
}

function selectPawn() {
  const option = +prompt('1]Move circle\n2]Move heart\n\nSelect an option:');
  return option;
}

function moveSymbol(circleScore, symbol, path) {
  moveto(box.lastIndexOf(symbol), getCellAdderss(path, circleScore), symbol);
}

function checkBlue() {
  if (are2PawnsIn(blueCirclepos, blueHeartpos, blueCircle, bluePath)) {
    blueCirclepos = 0;
    return true;
  }

  if (blueHeartpos === -1) {
    const option = selectPawn();
    if (option === 2) {
      blueHeartpos = 0;
      blueH = '  ';
      return moveto(box.lastIndexOf(blueHeart) - 2, getCellAdderss(bluePath, 0), blueHeart);
    }
    moveSymbol(blueCirclepos += 6, blueCircle, bluePath);
    return true;
  }
  return false;
}

function checkYellow() {
  if (are2PawnsIn(yellowCirclepos, yellowHeartpos, yellowCircle, yellowPath)) {
    yellowCirclepos = 0;
    return true;
  }

  if (yellowHeartpos === -1) {
    const option = selectPawn();
    if (option === 2) {
      yellowHeartpos = 0;
      yellowH = '  ';
      return moveto(box.lastIndexOf(yellowHeart) - 2, getCellAdderss(yellowPath, 0), yellowHeart);
    }

    moveSymbol(yellowCirclepos += 6, yellowCircle, yellowPath);
    return true;
  }
  return false;
}

function checkGreen() {
  if (are2PawnsIn(greenCirclepos, greenHeartpos, greenCircle, greenPath)) {
    greenCirclepos = 0;
    return true;
  }

  if (greenHeartpos === -1) {
    const option = selectPawn();
    if (option === 2) {
      greenHeartpos = 0;
      greenH = '  ';
      return moveto(box.lastIndexOf(greenHeart) - 2, getCellAdderss(greenPath, 0), greenHeart);
    }
    moveSymbol(greenCirclepos += 6, greenCircle, greenPath);
    return true;
  }
  return false;
}

function checkWhite() {
  if (are2PawnsIn(whiteCirclepos, whiteHeartpos, whiteCircle, whitePath)) {
    whiteCirclepos = 0;
    return true;
  }

  if (whiteHeartpos === -1) {
    const option = selectPawn();
    if (option === 2) {
      whiteHeartpos = 0;
      whiteH = '  ';
      return moveto(box.lastIndexOf(whiteHeart) - 2, getCellAdderss(whitePath, 0), whiteHeart);
    }
    moveSymbol(whiteCirclepos += 6, whiteCircle, whitePath);
    return true;
  }
  return false;
}

function executeBlueHeart(diceVal){
      blueHeartpos += diceVal;
      const currentPos = getCellAdderss(bluePath, blueHeartpos);
     
      CheckAndKill(bluePath, blueHeartpos);
      moveto(box.lastIndexOf('💙') - 2, currentPos, blueHeart);
}

function executeBlueCircle(){
  if(blueCirclepos + diceVal <= 38){

    blueCirclepos += diceVal;
    const currentPos = getCellAdderss(bluePath, blueCirclepos);
    
    CheckAndKill(bluePath, blueCirclepos);
    moveto(box.lastIndexOf(blueCircle), currentPos, blueCircle);
   }
}
// ----------------------------------------------------------------------
function executeBlue(){
  prompt("blue choice press ENTER to roll dice");
  diceVal = rollADice();
  if(blueCirclepos + diceVal <= 38 && blueHeartpos + diceVal <= 38){
    if (confirm("you got !!! " + diceVal + " press 'Y' to move heart ")){
      return executeBlueHeart(diceVal);
    }else{
      return executeBlueCircle(diceVal);
    }
    
  }else if(blueCirclepos + diceVal <= 38 || blueHeartpos + diceVal <= 38){
    if(blueCirclepos + diceVal <= 38){
      return executeBlueCircle(diceVal);
    }else{
      return executeBlueHeart(diceVal);
    }
  }
  
}


function gameCore() {
// console.clear();

  console.log(ludoBigLetters);
  printBox();
  validateScores();
  if (greenHeartpos === 38 && greenCirclepos === 38) {
    return 'green won🏆 the match🎉🥳';
  } else if (yellowHeartpos === 38 && yellowCirclepos === 38) {
    return 'yellow won🏆 the match🎉🥳';
  } else if (blueHeartpos === 38 && blueCirclepos === 38) {
    return 'blue won🏆 the match🎉🥳';
  } else if (whiteHeartpos === 38 && whiteCirclepos === 38) {
    return 'white won🏆 the match🎉🥳';
  }

  if (recursionControlVar % 4 === 1) {
    executeBlue();
    // prompt("blue choice press ENTER to roll dice");
    //  diceVal = rollADice();
    // if (confirm("you got !!! " + diceVal + " press 'Y' to move heart ")) {
    //   if(blueHeartpos + diceVal <= 38){
    //     blueHeartpos += diceVal;
    //     const currentPos = getCellAdderss(bluePath, blueHeartpos);
       
    //     CheckAndKill(bluePath, blueHeartpos);
    //     moveto(box.lastIndexOf('💙') - 2, currentPos, blueHeart);
    //   }
    // } else {
    //   if(blueCirclepos + diceVal <= 38){

    //    blueCirclepos += diceVal;
    //    const currentPos = getCellAdderss(bluePath, blueCirclepos);
       
    //    CheckAndKill(bluePath, blueCirclepos);
    //    moveto(box.lastIndexOf(blueCircle), currentPos, blueCircle);
    //   }
      
    // }
  } else if (recursionControlVar % 4 === 2) {
    prompt("yellow choice press ENTER to roll dice");
     diceVal = rollADice();
    if (confirm("you got !!! " + diceVal + "press 'Y' to move heart ")) {
     if(yellowHeartpos <= 38){
      yellowHeartpos += diceVal;
      const currentPos = getCellAdderss(yellowPath, yellowHeartpos);
      CheckAndKill(yellowPath, yellowHeartpos);
      moveto(box.lastIndexOf('💛') - 2, currentPos, yellowHeart);
     }
      
    } else {
      if(yellowCirclepos <= 38){
        yellowCirclepos += diceVal;
        const currentPos = getCellAdderss(yellowPath, yellowCirclepos);
      
        CheckAndKill(yellowPath, yellowCirclepos);
        moveto(box.lastIndexOf(yellowCircle), currentPos, yellowCircle);
      }
     
    }
  } else if (recursionControlVar % 4 === 3) {
    prompt("green choice press ENTER to roll dice");
     diceVal = rollADice();
    if (confirm("you got !!! " + diceVal + " press 'Y' to move heart ")) {
      if(greenHeartpos + diceVal <= 38){
      greenHeartpos += diceVal;
      const currentPos = getCellAdderss(greenPath, greenHeartpos);
      
      CheckAndKill(greenPath, greenHeartpos);
      moveto(box.lastIndexOf('💚') - 2, currentPos, greenHeart);
      }
      
    } else {
     if(greenCirclepos <= 38){
      greenCirclepos += diceVal;
      const currentPos = getCellAdderss(greenPath, greenCirclepos);
      
      CheckAndKill(greenPath, greenCirclepos);
      moveto(box.lastIndexOf(greenCircle), currentPos, greenCircle);
     }
     
    }
  } else if (recursionControlVar % 4 === 0) {
    prompt("white choice press ENTER to roll dice");
     diceVal = rollADice() ;
    if (confirm("you got !!! " + diceVal + " press 'Y' to move heart ")) {
      if(whiteHeartpos <= 38){
        
        whiteHeartpos += diceVal;
        const currentPos = getCellAdderss(whitePath, whiteHeartpos);
        
        CheckAndKill(whitePath, whiteHeartpos);
        moveto(box.lastIndexOf('🤍') - 2, currentPos, whiteHeart);
      }
      
    } else {
      if(whiteCirclepos <= 38){
        whiteCirclepos += diceVal;
        const currentPos = getCellAdderss(whitePath, whiteCirclepos);
    
        CheckAndKill(whitePath, whiteCirclepos);
        moveto(box.lastIndexOf(whiteCircle), currentPos, whiteCircle);
      }
    }
  }
  recursionControlVar += 1;
  // printBox();
  return gameCore();
}

console.log(gameCore());
