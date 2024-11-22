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
function moveto(currentPosition, nextPosition, replacement) {
  let newBox = "";
  let space = 0;
  if (replacement === '💙' || replacement === '💛' || replacement === '💚' || replacement === '🤍') {
    space -= 2;
  }
  if(currentPosition !== nextPosition){
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

 
}
