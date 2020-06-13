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

var generatePassword = function() {
  // variable defines password label which will generate later on based on following variables if selected by user
  var password = "";

  // Do while loop option
  /*var passLength;
  do {
    passLength = window.prompt("How long do you wish your generated password to be? Please choose a length of 8 - 128 characters.");
  } while (isNaN(passLength));*/

  // While
  var passLength = window.prompt("How long do you wish your generated password to be? Please choose a length of 8 - 128 characters.");
  if (passLength === null) {
    return;
  }
  
  while (isNaN(passLength)) {
    passLength = window.prompt("Please choose a password length of 8 - 128 characters.");
  }

  passLength = parseInt(passLength, 10); // input for password length

  // ensures user enters a password length 
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = window.prompt("Length MUST be 8 - 128 characters. How many characters do you wish your password to be?")
  }

  // input for password character types
  if (passLength >= 8 && passLength <= 128) {
    var upperCaseQ = window.confirm("Do you wish to include CAPITAL letters?");
    var lowerCaseQ = window.confirm("Do you wish to include LOWER CASE letters?");
    var availNumsQ = window.confirm("Do you wish to include numerical characters?");
    var availSpecsQ = window.confirm("Do you wish to include SPECIAL characters?");
    
    // forces user to pick at least one character type to continue
    while (!upperCaseQ && !lowerCaseQ && !availNumsQ && !availSpecsQ) {
      // make sure user selects character types
      window.confirm("WARNING: You must choose at least one character type to continue.");
      upperCaseQ = window.confirm("Do you wish to include CAPITAL letters?");
      lowerCaseQ = window.confirm("Do you wish to include LOWER CASE letters?");
      availNumsQ = window.confirm("Do you wish to include numerical characters?");
      availSpecsQ = window.confirm("Do you wish to include SPECIAL characters?");
    }

    // loop to include specific variables user requested into password
    var createPassword = '';

    if (upperCaseQ) {
      createPassword += upperCase;
    }

    if (lowerCaseQ) {
      createPassword += lowerCase;
    }

    if (availNumsQ) {
      createPassword += availNums;
    }

    if (availSpecsQ) {
      createPassword += availSpecs;
    }

    for (i = 0; i < passLength; i++) {
      password += createPassword[Math.floor(Math.random() * createPassword.length)];
    }
    debugger;
  } else {
    window.alert("Please enter 8 - 128 for character length.");
    generatePassword();
  }

  return password;
} 
   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
