import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import the TopNavigationBar
import PhotoList from './PhotoList'; // Import the PhotoList to display photos
import '../styles/HomeRoute.scss'; // Import the styling for HomeRoute

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;