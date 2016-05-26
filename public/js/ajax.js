'use strict';

var xhttp = new UserRequest();
var xhttpList = new UserRequest();

function xhttpResponseHead() {
  if (xhttp.status === 200 && xhttp.readyState === 4) {
    var resp = xhttp.responseText;
    Layout.displayHeader(resp);
  } else if (xhttp.readyState <= 3) {
    Layout.toggleText("Loading...");
  } else {
    Layout.displayError();
    Layout.toggleText("");
  }
};

function xhttpResponseList() {
  if (xhttpList.status === 200 && xhttpList.readyState === 4) {
    var resp = xhttpList.responseText;
    Layout.displayList(resp);
    Layout.toggleText("");
  }
};

function searchRequest(username) {
  var username = username.value;
  var url = ('https://api.github.com/users/' + username)
  Layout.toggleText("Loading...");
  
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = xhttpResponseHead;
  xhttp.send();
  
  xhttpList.open('GET', (url + '/repos'), true)
  xhttpList.onreadystatechange = xhttpResponseList;
  xhttpList.send(); 
}