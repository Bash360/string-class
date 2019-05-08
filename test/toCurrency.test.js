require('./../modules/string-class');
describe('Test for to currency ', () => {
  it('returns 11,111.11', () => {
    expect('11111.11'.toCurrency()).toMatch('11,111.11');
  });
  it('returns 534,626,376,278,289,210', () => {
    expect('534626376278289210'.toCurrency()).toMatch('534,626,376,278,289,210');
  });


})