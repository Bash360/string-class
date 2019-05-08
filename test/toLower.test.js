require('./../modules/string-class');
describe('Test for toLower', () => {
  it('returns BASH IS A GOOD GUY', () => {
    expect('BASH IS A GOOD GUY'.toLower()).toMatch('bash is a good guy');
  });
  it('returns bash is a cool guy and he is 26years old', () => {
    expect('BASH IS a cool guy and he is 26YEARS OLD'.toLower()).toMatch('bash is a cool guy and he is 26years old');
  });

})