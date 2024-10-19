import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({photo, onClose, favouritedPhotos, addOrRemoveFavourite, isFavorited}) => {
  return (
    <div className="photo-details-modal">
    <div className="photo-details-modal__top-bar">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>

    <img 
      src={photo.urls.full} 
      alt={`Photo by ${photo.user.username}`} 
      className="photo-details-modal__image" 
    />

<div className="photo-details-modal__photographer-details">
  <img 
    src={photo.user.profile} 
    alt={`${photo.user.username}'s profile`} 
    className="photo-details-modal__photographer-profile" 
  />
  <div className="photo-details-modal__photographer-info">
    <h3 className="photo-details-modal__header">{photo.user.username}</h3>
    <p className="photo-details-modal__photographer-location">
      {`${photo.location.city}, ${photo.location.country}`}
    </p>
  </div>
</div>
    
  <div className="photo-details-modal__images">
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <PhotoList 
        photos={photo.similar_photos} 
        favouritedPhotos={favouritedPhotos}
        addOrRemoveFavourite={addOrRemoveFavourite} // Pass the favourite/unfavourite handler
        />
      </div>
  </div>
  )
};

export default PhotoDetailsModal;
