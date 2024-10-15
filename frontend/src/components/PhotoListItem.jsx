import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const {id, username, imageSource, location, profile} = photo;
    return (
      <div className="photo-list__item" key={id}>
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      <div className="info">
        <div className="photo-list__user-details">
          <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            <h3 className="username">{username}</h3>
            <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
