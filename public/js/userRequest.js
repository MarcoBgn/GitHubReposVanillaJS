'use strict';

var UserRequest = function() {
  
    return (window.XMLHttpRequest) ? (new XMLHttpRequest()) : (new ActiveXObject('MicrosoftXMLHTTP'));
};