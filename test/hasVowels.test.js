require('./../modules/string-class');
describe('Test for vowels', () => {
    it('it returns false for empty Strings', () => {
        expect(''.hasVowels()).toBeFalsy();
    });
    it('it returns true for aeiou', () => {
        expect('aeiou'.hasVowels()).toBeTruthy();
    });
    it('it returns true for American', () => {
        expect('American'.hasVowels()).toBeTruthy();
    });
})