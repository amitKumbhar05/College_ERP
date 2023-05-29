import React from 'react';
import './extra.css'

function Profile(user) {

  const {username, rollno, userclass}=user
  
  return (
    <div class="profile-container">
    <div class="profile-image"><img src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg" alt="" /></div>
    <h2 class="profile-name">{username}</h2>
    <p class="profile-info">Roll No:{ rollno}</p>
    <p class="profile-info">Class: {userclass}</p>
    </div>
  

  );
}

export default Profile;
