import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, username, imageSource, location, profile }) => {
    return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo by ${username}`} className="photo" />
      <div className="info">
        <img src={profile} alt={`${username}'s profile`} className="profile-pic" />
        <div className="details">
          <h3 className="username">{username}</h3>
          <p className="location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
