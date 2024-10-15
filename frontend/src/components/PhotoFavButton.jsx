import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isSelected, onToggle }) => {
  return (
    <div className="photo-list__fav-icon" onClick={onToggle}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected} displayAlert={false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;