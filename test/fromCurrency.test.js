require('./../modules/string-class');
describe('Test for from currency ', () => {
  it('returns 11111.11', () => {
    expect('11,111.11'.fromCurrency()).toBe(11111.11);
  });
  it('returns  100000', () => {
    expect('100,000'.fromCurrency()).toBe(100000);
  });
  it('returns  false', () => {
    expect('100,000sfgcdsgdsajh'.fromCurrency()).toBeFalsy();
  });


})