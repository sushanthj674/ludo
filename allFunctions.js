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
