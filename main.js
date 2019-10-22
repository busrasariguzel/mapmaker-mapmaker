function doubleAll(arr) {
  const newArr = [];
  for(let i=0; i < arr.length; i++){
    newArr.push(arr[i] * 2)
  }
  return newArr;
}

function absoluteValues(arr) {
  const newArr = [];
  for(let i=0; i < arr.length; i++){
      if (arr[i] > 0 || arr[i] === 0){
      newArr.push(arr[i])
    } else if (arr[i] < 0){
      newArr.push(arr[i] *-1)
    }
  }
  return newArr;
  }



function yelledGreetings(arr) {
  const newArr = [];
  for(let i=0; i < arr.length; i++){
    newArr.push(arr[i] + '!')
  }
  return newArr;
}

function changeToInitials(arr) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    const name = arr[i];
    const spaceIndex = arr[i].indexOf(' ');
    const lastInitialIndex = spaceIndex + 1;
    // let firstLetterOfLastName = arr[lastInitialIndex]
    newArr.push(arr[i][0] + arr[lastInitialIndex].toUpperCase())
  }
  return newArr
}

['Colin Jaffe', "Busra Sariguzel"]


function doubleOdd(arr) {
  const newArr = [];
  for(let i=0; i < arr.length; i++){
    if (arr[i] % 2 === 1){
    newArr.push(arr[i] * 2)}
    else if (arr[i] < 0 && arr[i]*-1 % 2 ===1){
    newArr.push(arr[i] * 2)
    }
    else { 
      newArr.push(arr[i])}
      }
  return newArr
}

function upperCaseFirstLetters(arr) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){

    newArr.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toUpperCase())

    // newArr.push(arr[i].slice(-1,-2).toUpperCase())
  }
  return newArr;
}


function add1ToLeft(arr) {
//   const newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i]>0){
//       newArr.push(arr[i])
//     }

// return newArr;
// }
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}