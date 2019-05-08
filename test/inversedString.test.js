require('./../modules/string-class');
describe('Test for inversed Case', () => {
    it('returns BasH', () => {
        expect('bASh'.inverseCase()).toMatch('BasH');
    });
    it('returns GrEAt leAders Are MAde NoT BoRN', () => {
        expect('gReaT LEaDERS aRE maDE nOt bOrn'.inverseCase()).toMatch('GrEAt leAders Are MAde NoT BoRN');
    });

})