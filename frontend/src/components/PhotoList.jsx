import React, { useState } from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({photos, favouritedPhotos, addOrRemoveFavourite, onPhotoClick}) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
          <PhotoListItem 
            key={photo.id}
            photoId={photo.id}
            username={photo.user.username}
            imageSource={photo.urls.regular}
            location={photo.location}
            profile={photo.user.profile}
            favouritedPhotos={favouritedPhotos}
            addOrRemoveFavourite={addOrRemoveFavourite}
            onClick={() => onPhotoClick(photo.id)} // Handle photo click
          />
      ))}
    </ul>
  );
};

export default PhotoList;