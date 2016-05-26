"use strict";

describe("Function: searchRequest", function() {
  
  beforeEach(function (done) {
    spyOn(XMLHttpRequest.prototype, "open").and.callThrough();
    spyOn(XMLHttpRequest.prototype, "send").and.returnValue("SENT");
    searchRequest({value: 'username'});
    setTimeout(function () {
      if ((xhttp.readyState === 1) && (xhttp.send() === "SENT")) {
        done();
      }
    }, 500)
  })
  
  it('Opens an XMLHttpRequest call', function () {
    expect(xhttp.readyState).toEqual(1);
  })
  
  it('Sets onreadystatechange to the xhttpResponse function', function () {
    expect(xhttp.onreadystatechange).toEqual(xhttpResponseHead);
  })
  
  it('Changes the value of input_text to display loading...', function () {
    expect(document.getElementById('input_text').value).toEqual("Loading...");
    //it never gets reset because the Ajax request is stubbed and readyState 4 is never reached.
  })
  
  it('Sends the XMLHttpRequest', function () {
    expect(xhttp.send()).toEqual("SENT");
  })
});