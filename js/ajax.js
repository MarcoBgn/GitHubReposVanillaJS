'use strict';

var UserRequest = function () {
  return (window.XMLHttpRequest) ? (new XMLHttpRequest()) : (new ActiveXObject('MicrosoftXMLHTTP'));
}

var xhttp = new UserRequest();
var xhttpList = new UserRequest();

function xhttpResponse() {
  if (xhttp.status === 200 && xhttp.readyState === 4) {
    var resp = xhttp.responseText;
    displayHeader(resp)
  } else if (xhttp.readyState <= 3) {
    console.log("Loading")
  } else {
    console.log("Error: " + xhttp.responseText);
    //display Error Here
  }
};

function xhttpResponseList() {
  if (xhttpList.status === 200 && xhttpList.readyState === 4) {
    var resp = xhttpList.responseText;
    displayList(resp)
  } else if (xhttpList.readyState <= 3) {
    console.log("Loading")
  } else {
    console.log("Error: " + xhttpList.responseText);
  }
};

function searchRequest(username) {
  var username = username.value;
  var url = ('https://api.github.com/users/' + username + '?access_token=0ec6daacc3fe65ca1b1371b20686623af5a4a8a9')
  
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = xhttpResponse;
  xhttp.send();
  
  xhttpList.open('GET', 'https:/api.github.com/users/' + username + '/repos' + '?access_token=0ec6daacc3fe65ca1b1371b20686623af5a4a8a9', true)
  xhttpList.onreadystatechange = xhttpResponseList;
  xhttpList.send();
}
