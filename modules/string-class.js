String.prototype.hasVowels = function () {
  let vowelsRegex = /[aeiou]+/gi; //regular expression to match vowels in a string globally ignoring character case
  return vowelsRegex.test(this);
};
String.prototype.isQuestion = function () {
  let questionRegex = /^\s*([\w][\s]*)+\?{1}$/gm; //regular expression to match a question in a string
  return questionRegex.test(this); //returns true when string is a question otherwise false
};
String.prototype.toUpper = function () {
  let lowercaseRegex = /[a-z]/g; //regular expression to find lowercase in a string
  let stringUpperCase = this.replace(lowercaseRegex, function (match) {
    return String.fromCharCode( //converts charcode to the equivalent character
      match.charCodeAt() - 32); //use the String charCodeAt() method to get the charcode of the match subtracting 32 gives the char code of the capital letter equivalent
  });

  return stringUpperCase;
};
String.prototype.toLower = function () {
  let uppercaseRegex = /[A-Z]/g; //regular expression to find uppercase in a string
  let stringLowerCase = this.replace(uppercaseRegex, function (match) {
    return String.fromCharCode( //converts charcode to the equivalent character
      match.charCodeAt() + 32); //use the String charCodeAt() method to get the charcode of the match adding 32 gives the char code of the lowercase letter equivalent
  });
  return stringLowerCase;
};
String.prototype.ucFirst = function () {
  return this.split(/\s/)
    .map(function (currentValue) {
      return currentValue[0].toUpper() + currentValue.substr(1); //coverts the first character of the word to uppercase and adds the remaining characters of the word using the subtr() method
    })
    .join(' ');
};
String.prototype.words = function () {
  return this.trim().split(/\s/); //returns the string back as an array using the split() method and space as the seperator
};
String.prototype.wordCount = function () {
  return this.words().length; //returns the number of words in a sentence uses the words() method
};
String.prototype.inverseCase = function () {
  let inversedString;
  for (let counter = 0; counter < this.length; counter++) {
    inversedString +=
      this[counter].charCodeAt() >= 97 ? //checks to know if the char code of the character greater or equals 97 
      this[counter].toUpper() : //if the charcode is above or equal to 97 it converts the char  to uppercase
      this[counter].toLower(); // if the charcode is below to 97 it converts the char  to lowercase
  }
  return inversedString;
};
String.prototype.isDigit = function () {
  let digitRegEx = /^[\d]{1}$/; //regular expression to identify single digits in a string
  return digitRegEx.test(this);
}
String.prototype.alternatingCase = function () {
  let alternateString;
  let trimmedString = this.trim(); //removes spaces 
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
  let numbers = {
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
  let numberRegex = /\d/g; // regular expression to identify numbers globally
  if (/\D/.test(this)) { //regular expression to handle cases of non digits
    return false;
  }
  let numberWord = this.replace(numberRegex, function (match) {
    if (match in numbers) { // checks for the match as a key in the number object
      return numbers[match] + ' '; //gets the equivalent string of the matched digit
    }
  });
  return numberWord.trim();
}
String.prototype.fromCurrency = function () {
  let currencyRegex = /[,]/g;
  let trimmedCurrency = this.trim();

  if (/[^.,\d]/g.test(trimmedCurrency)) {
    return false;
  }

  let currencyString = trimmedCurrency.replace(currencyRegex, ''); //replaces commas with empty string
  return Number(currencyString);
}
String.prototype.toCurrency = function () {
  return this.replace(/(\d)(?=(\d{3})+(?!\d))(\.\d+)?/g, '$1,'); //regular expression to identify digits in pairs of three to format it to currency
}
module.exports = String;