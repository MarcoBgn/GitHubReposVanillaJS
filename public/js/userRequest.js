'use strict';

class UserRequest {
  
  constructor () {
    return (window.XMLHttpRequest) ? (new XMLHttpRequest()) : (new ActiveXObject('MicrosoftXMLHTTP'));
  }
};