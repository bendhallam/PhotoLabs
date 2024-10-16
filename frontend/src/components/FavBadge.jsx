import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favouritedPhotos }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={favouritedPhotos.length>0}/>
    </div>
  ) 
};

export default FavBadge;