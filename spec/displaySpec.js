'use strict';

describe('Function: displayHeader', function () {
  var testData;
  
   testData = '{"login":"MarcoCode"}'
  
  it('parses the data JSON and creates the HTML layout for the user', function () {
    displayHeader(testData);
    expect(document.getElementById('usr_img')).toBeDefined();
  })
})