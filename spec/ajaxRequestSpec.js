"use strict";

describe('Process: ajax', function () {
  var url = "https://api.github.com/users/marcocode", 
      testCallBack = function () {
        return "testCallBack";
      };
  
  beforeAll(function () {
    beforeEach(function (done) {
      spyOn(XMLHttpRequest.prototype, "open").and.callThrough();
      spyOn(XMLHttpRequest.prototype, "send").and.returnValue("SENT");
      spyOn(window, 'makeRequest').and.callThrough();
      searchRequest({value: 'username'});
      setTimeout(function () {
        if ((xhttp.readyState === 1) && (xhttp.send() === "SENT")) {
          done();
        }
      }, 500)
    })
  })
  
  describe("Function: searchRequest", function() {
    
    it('Calls Layout.toggleText()', function () {
      expect(document.getElementById('input_text').value).toEqual('Loading...');
    });
    
    it('Calls makeRequest()', function () {
      expect(makeRequest).toHaveBeenCalled();
    })
  });
  
  describe("Function: makeRequest", function() {
    
    beforeEach(function () {
       makeRequest(xhttp, testCallBack, (url + '/repos'));
    })
      
    it('Opens an XMLHttpRequest call', function () {
      expect(xhttp.readyState).toEqual(1);
    });
    
    it('Sets onreadystatechange to the xhttpResponse function', function () {
      expect(xhttp.onreadystatechange()).toEqual("testCallBack");
    });
    
    it('Sends the XMLHttpRequest', function () {
      expect(xhttp.send()).toEqual("SENT");
    });
  });
}); 