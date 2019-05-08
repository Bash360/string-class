require('./../modules/string-class');
describe('Test for toUpper', () => {
  it('it returns BASH IS a COOL GUY', () => {
    expect('bash Is a cool guy'.toUpper()).toMatch('BASH IS A COOL GUY');
  });
  it('it returns  BASH BECAME 26YEARS OLD ON THE 10TH OF MARCH 2019', () => {
    expect('bash became 26years Old On the 10th of march 2019'.toUpper()).toMatch('BASH BECAME 26YEARS OLD ON THE 10TH OF MARCH 2019');
  });

})