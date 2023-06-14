// Assignment code here
var keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%^&*()_+~|}{[]></-="
};

var getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];

// References to the #generateBtn element
var generateBtn = document.querySelector("#generateBtn");

function generatePassword() {
  var passwordLength = prompt('How many characters would you like?');
  console.log(passwordLength);

  var includeSpecialChars = window.confirm('Would you like to include special characters?');
  console.log(includeSpecialChars);

  var password = '';
  
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * getKey.length);
    password += getKey[randomIndex]();
  }

  return password;
}

// Password written to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);