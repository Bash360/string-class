require('./../modules/string-class');
describe('Test number to word ', () => {
    it('returns three two five', () => {
        expect('325'.numberToWord()).toMatch('three two five');
    });
    it('returns false', () => {
        expect('325rtw'.numberToWord()).toBeFalsy();
    });
    it('returns one one two', () => {
        expect('112'.numberToWord()).toMatch('one one two');
    });

})