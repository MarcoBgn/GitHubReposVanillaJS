'use strict';

describe('Class: UserRequest', function () {
  
  it('Has XMLHttpRequest (Legacy IE: ActiveXObject) as constructor', function () {
    var test1 = new UserRequest();
    expect(test1.constructor).toEqual(XMLHttpRequest || ActiveXObject('MicrosoftXMLHTTP'));
  });
});