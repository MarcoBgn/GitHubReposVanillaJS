'use strict';

function displayHeader(data) {
  var userInfo = document.getElementById('user_info'), response, userAvatar, userName, userFullName, userLocation;
  response = JSON.parse(data);
  
  document.getElementById('data_container').setAttribute('class', 'container_data');
  
  generateElement(userInfo, userAvatar, 'img', 'user_img')
  .setAttribute('src', response.avatar_url);
  generateElement(userInfo, userName, 'p', 'user_uname')
  .innerHTML = response.login;
  generateElement(userInfo, userFullName, 'h1', 'user_fullname')
  .innerHTML = response.name;
  generateElement(userInfo, userLocation, 'p', 'user_bio')
  .innerHTML = (response.location || "location not available");
}

function displayList(data) {
  var response, userInfo; 
  response = JSON.parse(data);
  userInfo = document.getElementById('user_info');
  
  generateElement(userInfo, 'Title', 'h3', 'list_title')
  .innerHTML = "Repositories";
  generateElement(userInfo, 'title_hr', 'hr', 'title_hr');
  
  for (var i = 0; i < response.length; i++) {
    generateElement(userInfo, null, 'p', response[i].id, 'repos_list')
    .innerHTML = response[i].name;
    generateElement(userInfo, null, 'span', null, 'glyphicons_star')
    .innerHTML = response[i].stargazers_count;
    generateElement(userInfo, null, 'img', null, 'glyphicons_star_img' )
    .setAttribute('src', 'images/glyphicons-50-star.png');
    generateElement(userInfo, null, 'span', null, 'glyphicons_fork')
    .innerHTML = response[i].forks;
    generateElement(userInfo, null, 'img', null, 'glyphicons_fork_img' )
    .setAttribute('src', 'images/glyphicons-309-share-alt.png');
    generateElement(userInfo, response[i].id, 'hr', 'hr_list', 'hr_div');
  }
}