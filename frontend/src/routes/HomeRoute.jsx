import React, { useState } from "react";


import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = ({photos, topics, favouritedPhotos, addOrRemoveFavourite, onPhotoClick}) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics}
        favouritedPhotos={favouritedPhotos}
      />
      <PhotoList 
        photos={photos}
        favouritedPhotos={favouritedPhotos}
        addOrRemoveFavourite={addOrRemoveFavourite}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;