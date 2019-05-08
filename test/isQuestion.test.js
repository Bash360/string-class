require('./../modules/string-class');
describe('Test for isQuestion', () => {
  it('it returns false for empty Strings', () => {
    expect(''.isQuestion()).toBeFalsy();
  });
  it(`it returns false for ' ?'`, () => {
    expect(' ?'.isQuestion()).toBeFalsy();
  });
  it('it returns true for to be or not to be?', () => {
    expect('to be or not to be?'.isQuestion()).toBeTruthy();
  });
})