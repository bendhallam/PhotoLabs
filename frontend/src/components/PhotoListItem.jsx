import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photoId, username, imageSource, location, profile, addOrRemoveFavourite, favouritedPhotos, handlePhotoSelect }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(prev => !prev);
    addOrRemoveFavourite(photoId);
  };

  return (
    <div className="photo-list__item" onClick={handlePhotoSelect}>
      <PhotoFavButton isSelected={isFavorited} onToggle={toggleFavorite} />
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h3 className="photo-list_username">{username}</h3>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;