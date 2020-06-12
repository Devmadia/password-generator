// Assignment code here

// variable character types
var upperCase = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var availNums = "0123456789";
var availSpecs = "~!"@#$%^&*'`?()_-=+,/[\]{|}<>:;";
var minPassLength = 8; // sets minimum
var maxPassLength = 128; // sets maximum


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  // input for password length

  // input for password character types


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
