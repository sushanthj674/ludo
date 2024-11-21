const indexes = '0001-0003-0023-0123-1234';
// 0001-0003-0023-0123-1234;
// 0123456789012345678901234567890
function sliceIndex(index){
  let value = '';
  const start = index * 5 
  for(let i = start; i < start + 4 ; i++) {
    value += indexes[i];
  }
  return +value;
}


function rollADice(){
  return 1 + Math.floor(Math.random() * 6)
  
}


//Moving purpose

let blueCircle = '🔵';
let blueHeart = '💙';
let blueSquare = '🟦';
let blueAnimal = '🪼';

let yellowCircle = '🟡';
let yellowHeart = '💛';
let yellowSquare = '🟨';
let yellowAnimal = '🐥';

let greenCircle = '🟢';
let greenHeart = '💚';
let greenSquare = '🟩';
let greenAnimal = '🐢';

let whiteCircle = '⚪️';
let whiteHeart = '🤍';
let whiteSquare = '⬜️';
let whiteAnimal = '🐼';

let blueC ="  ";
let blueH ="  ";
let blueS ="  ";
let blueA ="  ";

let yellowC ="  ";
let yellowH ="  ";
let yellowS ="  ";
let yellowA ="  ";

let whiteC ="  ";
let whiteH ="  ";
let whiteS ="  ";
let whiteA ="  ";

let greenC ="  ";
let greenH ="  ";
let greenS ="  ";
let greenA ="  ";

let box01 ="🟩";
let box ="";

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

function firstDefinition(){
 box = 
  '\n┏━━━━━━━━━━━━━━━━━━━┳━━━━┯━━━━┯━━━━┳━━━━━━━━━━━━━━━━━━━┓\n┃ ┏━━━━━━━━━━━━━━━━┓┃    ┆    ┆    ┃┏━━━━━━━━━━━━━━━━┓ ┃\n┃ ┃                ┃┃┄┄┄┄┟━━━━┪┄┄┄┄┃┃                ┃ ┃\n┃ ┃    '+ blueC +'    '+ blueH +'    ┃┃    ┃    ┃    ┃┃    '+ yellowC +'    '+ yellowH +'    ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┃    '+ blueS +'    '+ blueA +'    ┃┃    ┃    ┃    ┃┃    '+ yellowS +'    '+ yellowA +'    ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┗━━━━━━━━━━━━━━━━┛┃    ┃    ┃    ┃┗━━━━━━━━━━━━━━━━┛ ┃\n┣━━━━┯━━━━┯━━━━┯━━━━╋━━━━┻━━━━┻━━━━╋━━━━┯━━━━┯━━━━┯━━━━┫\n┃    ┆    ┆    ┆    ┃              ┃    ┆    ┆    ┆    ┃ \n┃┄┄┄┄┟━━━━╈━━━━╈━━━━┫              ┣━━━━╈━━━━╈━━━━┪┄┄┄┄┃\n┃    ┃    ┃    ┃    ┃              ┃    ┃    ┃    ┃    ┃\n┃┄┄┄┄┡━━━━╇━━━━╇━━━━┫              ┣━━━━╇━━━━╇━━━━╇┄┄┄┄┃\n┃    ┆    ┆    ┆    ┃              ┃    ┆    ┆    ┆    ┃\n┣━━━━┷━━━━┷━━━━┷━━━━╋━━━━┳━━━━┳━━━━╋━━━━┷━━━━┷━━━━┷━━━━┫\n┃ ┏━━━━━━━━━━━━━━━━┓┃    ┃    ┃    ┃┏━━━━━━━━━━━━━━━━┓ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┃    '+ whiteC +'    '+ whiteH +'    ┃┃    ┃    ┃    ┃┃    '+ greenC +'    '+ greenH +'    ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┣━━━━┫┄┄┄┄┃┃                ┃ ┃\n┃ ┃    '+ whiteS +'    '+ whiteA +'    ┃┃    ┃    ┃    ┃┃    '+ greenS +'    '+ greenA +'    ┃ ┃\n┃ ┃                ┃┃┄┄┄┄┡━━━━╇┄┄┄┄┃┃                ┃ ┃\n┃ ┗━━━━━━━━━━━━━━━━┛┃    ┆    ┆    ┃┗━━━━━━━━━━━━━━━━┛ ┃\n┗━━━━━━━━━━━━━━━━━━━┻━━━━┷━━━━┷━━━━┻━━━━━━━━━━━━━━━━━━━┛';
}
function printBox(){
  
  console.log(box);
}

function moveto(currentPosition, nextPosition, replacement ){
  let newBox = "";
  let space = 0;
  if(replacement === '💙' || replacement ==='💛'||replacement === '💚' || replacement === '🤍'){
    space -= 2;
  }
  for(let index = 0; index < box.length; index += 1 ){ 
    
   if(index + space === currentPosition || index + space === currentPosition + 1){
    newBox += " ";
   }else if(index + space === nextPosition || index + space === nextPosition + 1){
    newBox += index + space === nextPosition ? replacement[0] : replacement[1];
   }else{
    newBox+= box[index];
   }
  }

  box =newBox;
}
firstDefinition();
printBox();

moveto(1012, 779, '🟢');
printBox();

moveto(1016, 779, "💚");
printBox(); 

moveto(217,550, '💛');
printBox();
moveto(213,550,'🟡');
printBox();
moveto(982,878,'🤍');
printBox();
moveto(978,878,'⚪️');
printBox();
moveto(183,421,'💙');
printBox();
moveto(179,421,'🔵');
printBox();
