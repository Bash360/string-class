require('./../modules/string-class');
describe('Test for ucFirst', () => {
  it('returns You Are Good', () => {
    expect('you are good'.ucFirst()).toMatch('You Are Good');
  });
  it('returns I Am Bash', () => {
    expect('i am bash'.ucFirst()).toMatch('I Am Bash');
  });

})