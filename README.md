# Extending the String inbuilt Object

## methods added:

| Methods                          | Description                                                                                   | Examples                                                |
| -------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| String.prototype.hasVowels       | Used to check for vowels (aeio) in a string                                                   | "aeiou".hasVowels() returns true                        |
| String.prototype.isQuestion      | Used to identify questions in a string                                                        | "to be or not to be?".isQuestion() returns true         |
| String.prototype.toUpper         | Used to convert a lowercase string to uppercase                                               | "bash".toUpper() returns "BASH"                         |
| String.prototype.toLower         | Used to convert an uppercase string to lowercase                                              | "BASH".toLower() returns "bash"                         |
| String.prototype.ucFirst         | Used to convert every first character of a word to uppercase                                  | "i am bash".ucFirst() returns "I Am Bash"               |
| String.prototype.words           | Used to split the words of a string into an array                                             | "life is good".words() returns ["life","is","good"]     |
| String.prototype.wordCount       | Used to count the number of words in a string                                                 | "bash is a good guy".wordCount() returns 5              |
| String.prototype.inverseCase     | Used to inverse the character case in a string                                                | "bASh".inverseCase() returns "BasH"                     |
| String.prototype.isDigit         | Used to identify single digits                                                                | "2".isDigit() returns true                              |
| String.prototype.alternatingCase | used to alternate the character case in a string with the first character as always lowercase | "Onomatopoeia".alternatingCase() returns "oNoMaToPoEiA" |
| String.prototype.numberToWord    | used to convert numbers in a string to their equivalent in words                              | "325".numberToWord() returns "three two five"           |
| String.prototype.fromCurrency    | used to convert currency strings to numbers                                                   | "11,111.11".fromCurrency() returns 11111.11             |
| String.prototype.toCurrency      | used to convert Strings to currency                                                           | "1000".toCurrency() returns "1,000"                     |
