// Assignment code here
// variable character types
var upperCase = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var availNums = "0123456789";
var availSpecs = "~!@#$%^&*'`?()_-=+,/[\]{|}<>:;";
var minPassLength = 8; // sets minimum
var maxPassLength = 128; // sets maximum


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

debugger;
var generatePassword = function() {
  // variable defines password label which will generate later on based on following variables if selected by user
  //var password = "";

  // Do while loop
  //var passLength;
  //do {
  //  passLength = window.prompt("How long do you wish your generated password to be? Please choose a length of 8 - 128 characters.");
  //} while (isNaN(passLength));


  // While
  var passLength = window.prompt("How long do you wish your generated password to be? Please choose a length of 8 - 128 characters.");
  if (passLength === null) {
    return;
  }
  
  while (isNaN(passLength)) {
    passLength = window.prompt("Please choose a password length of 8 - 128 characters.");
  }

  //passLength = parseInt(passLength, 10); // input for password length

  // ensures user enters a password length 
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = window.prompt("Length MUST be 8 - 128 characters. How many characters do you wish your password to be?")
  }

  // input for password character types
  if (passLength >= 8 && passLength <= 128) {
    var upperCase = window.confirm("Do you wish to include CAPITAL letters?");
    var lowerCase = window.confirm("Do you wish to include LOWER CASE letters?");
    var availNums = window.confirm("Do you wish to include numerical characters?");
    var availSpecs = window.confirm("Do you wish to include SPECIAL characters?");
    // forces user to pick at least one character type to continue
    while (!upperCase && !lowerCase && !availNums && !availSpecs) {
      window.confirm("WARNING: You must choose at least one character type to continue.");
      upperCase = window.confirm("Do you wish to include CAPITAL letters?");
      lowerCase = window.confirm("Do you wish to include LOWER CASE letters?");
      availNums = window.confirm("Do you wish to include numerical characters?");
      availSpecs = window.confirm("Do you wish to include SPECIAL characters?");
    }
  }
} 
 
 
  
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
