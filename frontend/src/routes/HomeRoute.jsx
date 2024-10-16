import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({photos, topics, favouritedPhotos}) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics}
        favouritedPhotos={favouritedPhotos}/>
      <PhotoList 
        photos={photos}
        favouritedPhotos={favouritedPhotos}/>
    </div>
  );
};

export default HomeRoute;
