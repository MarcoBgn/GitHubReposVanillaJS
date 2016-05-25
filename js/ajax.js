'use strict';

var xhttp; 

(window.XMLHttpRequest) ? (xhttp = new XMLHttpRequest()) : (xhttp = new ActiveXObject('MicrosoftXMLHTTP'));

var btn = document.getElementById('input_button');

function xhttpResponse() {
  if (xhttp.status == 200 && xhttp.readyState == 4) {
    var resp = xhttp.responseText;
    displayData(resp)
  } else if (xhttp.readyState <= 3) {
    console.log("Loading")
  } else {
    console.log("Error" + xhttp.responseText);
  }
};

function searchRequest(username) {
  var username = username.value, repos;
  var url = ('https://api.github.com/users/' + username + '?access_token=a943bc78f441cc5f369d47a711c7252b30fbb95e')
  xhttp.open('GET', url , true);
  xhttp.onreadystatechange = xhttpResponse;
  xhttp.send();
}
