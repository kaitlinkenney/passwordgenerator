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

else if (userLength > 128) {
  alert("Too many characters");
}

if (confirmSymbols) {
  
}
