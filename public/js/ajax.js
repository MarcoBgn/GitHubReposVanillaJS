'use strict';

var xhttp = new UserRequest();
var xhttpList = new UserRequest();

function xhttpResponseHead() {
  if (xhttp.status === 200 && xhttp.readyState === 4) {
    var resp = xhttp.responseText;
    displayHeader(resp);
  } else if (xhttp.readyState <= 3) {
     // cool spinner or effect can be added here
  } else {
    displayError();
  }
};

function xhttpResponseList() {
  if (xhttpList.status === 200 && xhttpList.readyState === 4) {
    var resp = xhttpList.responseText;
    displayList(resp);
  } else {
    //..
  }
};

function searchRequest(username) {
  var username = username.value;
  var url = ('https://api.github.com/users/' + username + '?access_token=f2384d55b3be294629129210cc036353a7bf352f')
  
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = xhttpResponseHead;
  xhttp.send();
  
  xhttpList.open('GET', 'https:/api.github.com/users/' + username + '/repos' + '?access_token=f2384d55b3be294629129210cc036353a7bf352f', true)
  xhttpList.onreadystatechange = xhttpResponseList;
  xhttpList.send(); 
}