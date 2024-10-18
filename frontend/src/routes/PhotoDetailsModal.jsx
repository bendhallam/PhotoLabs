import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({photo, onClose}) => {
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
      <PhotoList photos={photo.similar_photos} />
    </div>
  </div>
  )
};

export default PhotoDetailsModal;
