'use strict';

var xhttp = new UserRequest();
var xhttpList = new UserRequest();

function makeRequest(obj, callback, url) {
  obj.open('GET', url, true);
  obj.onreadystatechange = callback;
  obj.send();
}

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
}

function xhttpResponseList() {
  if (xhttpList.status === 200 && xhttpList.readyState === 4) {
    var resp = xhttpList.responseText;
    Layout.displayList(resp);
    Layout.toggleText("");
  }
}

function searchRequest(username) {
  var username = username.value;
  var url = ('https://api.github.com/users/' + username)
  Layout.toggleText("Loading...");
  makeRequest(xhttp, xhttpResponseHead, url);
  makeRequest(xhttpList, xhttpResponseList, (url + '/repos'));
}