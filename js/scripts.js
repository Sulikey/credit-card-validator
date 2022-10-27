
let testNumber = 1234

function numberToString(numberIn) {
  return numberIn.toString();
}

let numberString = numberToString(testNumber);


function splitString (stringIn) {
  return stringIn.split("");
}

let stringArray = splitString (numberString);

function arrayOfNumbers (arrayIn) {
  let numberArray = arrayIn.map(function(place) {
    return parseInt(place)
  

  })
return numberArray
}

