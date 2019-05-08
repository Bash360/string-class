String.prototype.hasVowels = function () {
    let vowelsRegex = /[aeiou]+/gi; //regular expression to match vowels in a string globally ignoring character case
    return vowelsRegex.test(this);
};
String.prototype.isQuestion = function () {
    let questionRegex = /^\s*([\w][\s]*)+\?{1}$/gm;//regular expression to match a question in a string
    return questionRegex.test(this); //returns true when string is a question otherwise false
};
String.prototype.toUpper = function () {
    let lowercaseRegex = /[a-z]/g; //regular expression to find lowercase in a string
    let stringUpperCase = this.replace(lowercaseRegex, function (match) { //
        return String.fromCharCode(match.charCodeAt() - 32);
    });
    return stringUpperCase;
};
String.prototype.toLower = function () {
    let uppercaseRegex = /[A-Z]/g;
    let stringLowerCase = this.replace(uppercaseRegex, function (match) {
        return String.fromCharCode(match.charCodeAt() + 32);
    });
    return stringLowerCase;
};
String.prototype.ucFirst = function () {
    return this.split(/\s/)
        .map(function (currentValue) {
            return currentValue[0].toUpper() + currentValue.substr(1);
        })
        .join(' ');
};
String.prototype.words = function () {
    return this.trim().split(/\s/);
};
String.prototype.wordCount = function () {
    return this.words().length;
};
String.prototype.inverseCase = function () {
    let inversedString;
    for (counter = 0; counter < this.length; counter++) {
        inversedString +=
            this[counter].charCodeAt() >= 97 ?
            this[counter].toUpper() :
            this[counter].toLower();
    }
    return inversedString;
};
String.prototype.isDigit = function () {
    let digitRegEx = /^[\d]{1}$/;
    return digitRegEx.test(this);
}
String.prototype.alternatingCase = function () {
    let alternateString;
    let trimmedString = this.trim();
    for (counter = 0; counter < trimmedString.length; counter++) {
        if (counter % 2 === 0 && trimmedString[counter]) {
            alternateString += trimmedString[counter].toLower();

        } else {
            alternateString += trimmedString[counter].toUpper();
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
    };
    let numberRegex = /\d/g;
    if (/\D/.test(this)) {
        return false;
    }
    let numberWord = this.replace(numberRegex, function (match) {
        if (match in numbers) {
            return numbers[match] + ' ';
        }
    });
    return numberWord.trim();
}
String.prototype.fromCurrency = function () {
    let currencyRegex = /[,]/g;
    trimmedCurrency = this.trim();

    if (/[^.,\d]/g.test(trimmedCurrency)) {
        return false;
    }

    let currencyString = trimmedCurrency.replace(currencyRegex, '');
    return Number(currencyString);
}
String.prototype.toCurrency = function () {
    return this.replace(/(\d)(?=(\d{3})+(?!\d))(\.\d+)?/g, '$1,');
}
module.exports = String;