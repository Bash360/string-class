require('./../modules/string-class');
describe('Test for isDigit', () => {
  it('returns false', () => {
    expect(''.isDigit()).toBeFalsy();
  });
  it('returns true', () => {
    expect('2'.isDigit()).toBeTruthy();
  });
  it('returns false', () => {
    expect('234'.isDigit()).toBeFalsy();
  });



})