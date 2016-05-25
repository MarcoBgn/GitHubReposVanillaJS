'use strict';

var xhttp = new UserRequest();
var xhttpList = new UserRequest();

function xhttpResponseHead() {
  if (xhttp.status === 200 && xhttp.readyState === 4) {
    var resp = xhttp.responseText;
    displayHeader(resp);
  } else if (xhttp.readyState <= 3) {
    console.log("Loading") // spinner or css class
  } else {
    displayError();
  }
};

function xhttpResponseList() {
  if (xhttpList.status === 200 && xhttpList.readyState === 4) {
    var resp = xhttpList.responseText;
    displayList(resp);
  } else if (xhttpList.readyState <= 3) {
    console.log("Loading")
  } else {
    //..
  }
};

function searchRequest(username) {
  var username = username.value;
  var url = ('https://api.github.com/users/' + username + '?access_token=a8c46595f92397d1f7c30378d85895ea477a314c')
  
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = xhttpResponseHead;
  xhttp.send();
  
  xhttpList.open('GET', 'https:/api.github.com/users/' + username + '/repos' + '?access_token=a8c46595f92397d1f7c30378d85895ea477a314c', true)
  xhttpList.onreadystatechange = xhttpResponseList;
  xhttpList.send(); 
}