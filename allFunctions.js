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

let box01 ="🟩";
let box =""


function firstDefinition(){
  box = 
  '\n┏━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┓\n┃ ┏━━━━━━━━━━━━━━━━┓┃              ┃┏━━━━━━━━━━━━━━━━┓ ┃\n┃ ┃                ┃┃    ┏━━━━┓    ┃┃                ┃ ┃\n┃ ┃  '+box01+'            ┃┃    ┃    ┃    ┃┃                ┃ ┃\n┃ ┃                ┃┃    ┣━━━━┫    ┃┃                ┃ ┃\n┃ ┃                ┃┃    ┃    ┃    ┃┃                ┃ ┃\n┃ ┃                ┃┃    ┣━━━━┫    ┃┃                ┃ ┃\n┃ ┗━━━━━━━━━━━━━━━━┛┃    ┃    ┃    ┃┗━━━━━━━━━━━━━━━━┛ ┃\n┣━━━━━━━━━━━━━━━━━━━╋━━━━┻━━━━┻━━━━╋━━━━━━━━━━━━━━━━━━━┫\n┃                   ┃              ┃                   ┃ \n┃    ┏━━━━┳━━━━┳━━━━┫              ┣━━━━┳━━━━┳━━━━┓    ┃\n┃    ┃    ┃    ┃    ┃              ┃    ┃    ┃    ┃    ┃\n┃    ┗━━━━┻━━━━┻━━━━┫              ┣━━━━┻━━━━┻━━━━┛    ┃\n┃                   ┃              ┃                   ┃\n┣━━━━━━━━━━━━━━━━━━━╋━━━━┳━━━━┳━━━━╋━━━━━━━━━━━━━━━━━━━┫\n┃ ┏━━━━━━━━━━━━━━━━┓┃    ┃    ┃    ┃┏━━━━━━━━━━━━━━━━┓ ┃\n┃ ┃                ┃┃    ┣━━━━┫    ┃┃                ┃ ┃\n┃ ┃      '+ box01 + '        ┃┃    ┃    ┃    ┃┃                ┃ ┃\n┃ ┃                ┃┃    ┣━━━━┫    ┃┃                ┃ ┃\n┃ ┃                ┃┃    ┃    ┃    ┃┃                ┃ ┃\n┃ ┃                ┃┃    ┗━━━━┛    ┃┃                ┃ ┃\n┃ ┗━━━━━━━━━━━━━━━━┛┃              ┃┗━━━━━━━━━━━━━━━━┛ ┃\n┗━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━┛';
}
function printBox(){
  
  console.log(box);
}

function moveto(currentPosition, nextPosition, replacement){
  let newBox = "";

  for(let index = 0; index < box.length; index += 1 ){ 
    
   if(index === currentPosition || index === currentPosition + 1){
    newBox += " ";
   }else if(index === nextPosition || index === nextPosition + 1){
    newBox += index === nextPosition ? replacement[0] : replacement[1];
   }else{
    newBox+= box[index];
   }
  }

  box =newBox;
}
