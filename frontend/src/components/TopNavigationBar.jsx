import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({topics, favouritedPhotos, onTopicSelect}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicSelect={onTopicSelect}/>
      <FavBadge favouritedPhotos={favouritedPhotos}/>
    </div>
  )
}

export default TopNavigationBar;