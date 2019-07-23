String.prototype.hasVowels =   () {
  var vowelsRegex = /[aeiou]+/gi; //regular expression to match vowels in a string globally ignoring character case
  return vowelsRegex.test(this);
};
String.prototype.isQuestion =   () {
  var questionRegex = /^\s*([\w][\s]*)+\?{1}$/gm; //regular expression to match a question in a string
  return questionRegex.test(this); //returns true when string is a question otherwise false
};
String.prototype.toUpper =   () {
  var lowercaseRegex = /[a-z]/g; //regular expression to find lowercase in a string
  var stringUpperCase = this.replace(lowercaseRegex,   (match) {
    return String.fromCharCode( //converts charcode to the equivalent character
      match.charCodeAt() - 32); //use the String charCodeAt() method to get the charcode of the match subtracting 32 gives the char code of the capital varter equivalent
  });

  return stringUpperCase;
};
String.prototype.toLower =   () {
  var uppercaseRegex = /[A-Z]/g; //regular expression to find uppercase in a string
  var stringLowerCase = this.replace(uppercaseRegex,   (match) {
    return String.fromCharCode( //converts charcode to the equivalent character
      match.charCodeAt() + 32); //use the String charCodeAt() method to get the charcode of the match adding 32 gives the char code of the lowercase varter equivalent
  });
  return stringLowerCase;
};
String.prototype.ucFirst =   () {
  return this.split(/\s/)
    .map(  (currentValue) {
      return currentValue[0].toUpper() + currentValue.substr(1); //coverts the first character of the word to uppercase and adds the remaining characters of the word using the subtr() method
    })
    .join(' ');
};
String.prototype.words =   () {
  return this.trim().split(/\s/); //returns the string back as an array using the split() method and space as the seperator
};
String.prototype.wordCount = function () {
  return this.words().length; //returns the number of words in a sentence uses the words() method
};
String.prototype.inverseCase = function () {
  var inversedString;
  for (var counter = 0; counter < this.length; counter++) {
    inversedString +=
      this[counter].charCodeAt() >= 97 ? //checks to know if the char code of the character greater or equals 97 
      this[counter].toUpper() : //if the charcode is above or equal to 97 it converts the char  to uppercase
      this[counter].toLower(); // if the charcode is below to 97 it converts the char  to lowercase
  }
  return inversedString;
};
String.prototype.isDigit = function () {
  var digitRegEx = /^[\d]{1}$/; //regular expression to identify single digits in a string
  return digitRegEx.test(this);
}
String.prototype.alternatingCase = function () {
  var alternateString;
  var trimmedString = this.trim(); //removes spaces 
  for (counter = 0; counter < trimmedString.length; counter++) {
    if (counter % 2 === 0 && trimmedString[counter]) {
      alternateString += trimmedString[counter].toLower(); //string character with even indexes are converted to lowercase beginning at the first index

    } else {
      alternateString += trimmedString[counter].toUpper(); //string character with odd indexes are converted to uppercase
    }
  }
  return alternateString;

}
String.prototype.numberToWord = function () {
  var numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
  }; //object of numbers as keys and their string equivalent as value
  var numberRegex = /\d/g; // regular expression to identify numbers globally
  if (/\D/.test(this)) { //regular expression to handle cases of non digits
    return false;
  }
  var numberWord = this.replace(numberRegex, function (match) {
    if (match in numbers) { // checks for the match as a key in the number object
      return numbers[match] + ' '; //gets the equivalent string of the matched digit
    }
  });
  return numberWord.trim();
}
String.prototype.fromCurrency = function () {
  var currencyRegex = /[,]/g;
  var trimmedCurrency = this.trim();

  if (/[^.,\d]/g.test(trimmedCurrency)) {
    return false;
  }

  var currencyString = trimmedCurrency.replace(currencyRegex, ''); //replaces commas with empty string
  return Number(currencyString);
}
String.prototype.toCurrency = function () {
  return this.replace(/(\d)(?=(\d{3})+(?!\d))(\.\d+)?/g, '$1,'); //regular expression to identify digits in pairs of three to format it to currency
}
module.exports = String;