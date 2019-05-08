require('./../modules/string-class');
describe('Test for words', () => {
    it(`returns ['life','is','good']`, () => {
        expect('life is good'.words()).toContain('life');
    });
    it(`returns ['life','is','good']`, () => {
        expect('life is good'.words()).toContain('good');
    });
    it(`returns ['life','is','god']`, () => {
        expect('life is good'.words()).toHaveLength(3);
    });

})