// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts
var userLength = prompt("How many characters do you want in yor password? (Must have 8 to 128 characters)");
var confirmSymbols = confirm("Do you want special characters in your password?");
var confirmLowerCase = confirm("Do you want lower case characters?");
var confirmUpperCase = confirm("Do you want upper case characters?");
var confirmNumbers = confirm("Do you want numeric characters?");

if (userLength < 8) {
  alert("Not enough characters");
}

if (userLength > 128) {
  alert("Too many characters");
}

// if (confirmSymbols === true) {
//   
// 

// if (confirmLowerCase = true) {
//   push(lowerCase);
// }
// else { 
//   return lowerCase;
// }

// if (confirmUpperCase = true) {
//   push(upperCase);
// }
// else {
//   return upperCase; 
// }

// if (confirmNumbers = true) {
//   push(numbers);
// }
// else {
//   return numbers;
// }

//arrays of symbols, capital letters, etc.
//var symbols, var numbers

var symbols = ['@', '!', '%', '#', '^', '&', '*', '(', ')']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


var passwordArray = []
var finalPassword = ""

if (confirmSymbols === true) {
  passwordArray = passwordArray.concat(symbols);
}
console.log(passwordArray);

if (confirmLowerCase === true) {
  passwordArray = passwordArray.concat(lowerCase);
}
console.log(passwordArray);

for (var i = 0; i < userLength; i++) {
  finalPassword += getRandom(passwordArray)
}
console.log(finalPassword);
// function to get random element from any array
function getRandom(arr) {
  // write logic to select and return random element from the array passed in as the parameter
  var randomElement = arr[Math.floor(Math.random() * arr.length)]
  return randomElement
}

var passwordOptions = {
  userLength: userLength,
  confirmSymbols: confirmSymbols,
  confirmLowerCase: confirmLowerCase,
  confirmUpperCase: confirmUpperCase,
  confirmNumbers: confirmNumbers,
}

