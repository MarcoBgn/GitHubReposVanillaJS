'use strict';

describe('Object: UserRequest', function () {
  
  it('Has XMLHttpRequest (Legacy: ActiveXObject) as constructor', function () {
    var test1 = new UserRequest();
    expect(test1.constructor).toEqual(XMLHttpRequest || ActiveXObject('MicrosoftXMLHTTP'));
  });
});