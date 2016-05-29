var UserRequest = function() {
    'use strict';
    return (window.XMLHttpRequest) ? (new XMLHttpRequest()) : (new ActiveXObject('MicrosoftXMLHTTP'));
};