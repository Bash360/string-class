require('./../modules/string-class');
describe('Test for word count', () => {
    it('returns 5', () => {
        expect('bash is a good guy'.wordCount()).toBe(5);
    });
    it('returns 1', () => {
        expect('bash '.wordCount()).toBe(1);
    });
    
})