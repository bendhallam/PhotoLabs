import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({photos, topics, favouritedPhotos, addOrRemoveFavourite}) => {
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
      />
    </div>
  );
};

export default HomeRoute;