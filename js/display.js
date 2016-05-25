'use strict';

function displayData(data) {
  var userInfo = document.getElementById('user_info'), response, userAvatar, userName, userFullName, userBio;
  response = JSON.parse(data);
  
  document.getElementById('data_container').setAttribute('class', 'container_data');
  
  userAvatar = document.createElement('img');
  userInfo.appendChild(userAvatar);
  userAvatar.setAttribute('id', 'user_img');
  userAvatar.setAttribute('src', response.avatar_url)
  
  userName = document.createElement('p');
  userInfo.appendChild(userName);
  userName.setAttribute('id', 'user_uname');
  userName.innerHTML = response.login;
  
  console.log(response)
  
  userFullName = document.createElement('h1');
  userInfo.appendChild(userFullName);
  userFullName.setAttribute('id', 'user_fullname');
  userFullName.innerHTML = response.name;
  
  userBio = document.createElement('p');
  userInfo.appendChild(userBio);
  userBio.setAttribute('id', 'user_bio');
  userBio.innerHTML = (response.bio || "bio not available");
  
  
}