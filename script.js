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

function generatePassword() {
  function getUserLength() {
    var userLength = prompt("How many characters do you want in your password? (Must have 8 to 128 characters)");
    if (userLength < 8 || userLength > 128) {
      alert("Invalid character count");
      getUserLength()
    }
    passwordLength = userLength
  }

  var passwordLength;
  // Prompts
  getUserLength()
  var confirmSymbols = confirm("Do you want special characters in your password?");
  var confirmLowerCase = confirm("Do you want lower case characters?");
  var confirmUpperCase = confirm("Do you want upper case characters?");
  var confirmNumbers = confirm("Do you want numeric characters?");



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
  console.log('confirmsymbols=--->',passwordArray);

  if (confirmLowerCase === true) {
    passwordArray = passwordArray.concat(lowerCase);
  }
  console.log('confirmlowercase--->',passwordArray);

  if (confirmUpperCase === true) {
    passwordArray = passwordArray.concat(upperCase);
  }
  console.log('confirmUPPERCASE-->',passwordArray);

  if (confirmNumbers === true) {
    passwordArray = passwordArray.concat(numbers);
  }
  console.log('confirm12335567--->', passwordArray) ;


  
  // function to get random element from any array
  function getRandom(arr) {
    // write logic to select and return random element from the array passed in as the parameter
    
    var randomElement = arr[Math.floor(Math.random() * arr.length-1)]
    return randomElement;
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomValue = getRandom(passwordArray);
    finalPassword += randomValue
  }
  console.log(finalPassword);

  return finalPassword;


}