require('./../modules/string-class');
describe('Test for ', () => {
    it('returns oNoMaToPoEiA', () => {
        expect('Onomatopoeia'.alternatingCase()).toMatch('oNoMaToPoEiA');
    });
    it('returns oNoMaToPoEiA', () => {
        expect(' Onomatopoeia '.alternatingCase()).toMatch('oNoMaToPoEiA');
    });
    
})
