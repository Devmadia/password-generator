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
  var password = ""; // variable defines password label which will generate later on based on following variables if selected by user
  var passLength = window.prompt("How long do you wish your generated password to be? Please choose a length of 8 - 128 characters.")
  passLength = parseInt(passLength, 8); // input for password length
  while (passLength < || passLength > 128) {
    passLength = prompt("Length MUST be 8 - 128 characters. How many characters do you wish your password to be?")
  }
  // input for password character types
  // make sure user selects character types
  // loop to include specific variables user requested into password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
