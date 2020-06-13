// Assignment code here
// variable character types
var upperCase = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var availNums = "0123456789";
var availSpecs = "~!@#$%^&*'`?()_-=+,/[\]{|}<>:;";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  // variable defines password label which will generate later on based on following variables if selected by user
  var password = "";

  // Do-While loop option
  /*var passLength;
  do {
    passLength = window.prompt("How long do you wish your generated password to be? Please choose a length of 8 - 128 characters.");
  } while (isNaN(passLength));*/

  // While
  var passLength = window.prompt("How long do you wish your generated password to be? Please choose a length of 8 - 128 characters.");
  if (passLength === null) {
    return;
  }
  
  // while passLength is Not-A-Number, user is prompted to pick a value of 8 - 128 
  while (isNaN(passLength)) {
    passLength = window.prompt("Please choose a password length of 8 - 128 characters.");
  }

  // input for password length forced into a number
  passLength = parseInt(passLength, 10); 

  // ensures user enters a password length 
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = window.prompt("Length MUST be 8 - 128 characters. How many characters do you wish your password to be?")
  }

  // input for password character types
  if (passLength >= 8 && passLength <= 128) {
    var upperCaseQ = window.confirm("Do you wish to include CAPITAL letters?");
    var lowerCaseQ = window.confirm("Do you wish to include LOWER CASE letters?");
    var availNumsQ = window.confirm("Do you wish to include NUMERICAL characters?");
    var availSpecsQ = window.confirm("Do you wish to include SPECIAL characters?");
    
    // forces user to pick at least one character type to continue
    while (!upperCaseQ && !lowerCaseQ && !availNumsQ && !availSpecsQ) {
      // loop of warning and prompts until at least one character type selected
      window.confirm("WARNING: You must choose at least one character type to continue.");
      upperCaseQ = window.confirm("Do you wish to include CAPITAL letters?");
      lowerCaseQ = window.confirm("Do you wish to include LOWER CASE letters?");
      availNumsQ = window.confirm("Do you wish to include NUMERICAL characters?");
      availSpecsQ = window.confirm("Do you wish to include SPECIAL characters?");
    }

    // specific variables user requested into password if confirmation received
    var createPassword = '';

    if (upperCaseQ) {
      createPassword += upperCase; // if upperCaseQ selected, introduce upperCase characters to createPassword
    }

    if (lowerCaseQ) {
      createPassword += lowerCase; // if lowerCase selected, introduce lowerCase characters to createPassword
    }

    if (availNumsQ) {
      createPassword += availNums; // if availNumsQ selected, introduce availNums characters to createPassword
    }

    if (availSpecsQ) {
      createPassword += availSpecs; // if availSpecsQ selected, introduce availSpecs characters to createPassword
    }

    for (i = 0; i < passLength; i++) {
      password += createPassword[Math.floor(Math.random() * createPassword.length)];
    }
    
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
