import React, { useState } from "react";

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // Set a favourited photos state
  const [favouritedPhotos, setFavouritedPhotos] = useState([]);
  // Add a function to add or remove a photo from favourites
  const addOrRemoveFavourite = (photoId) => {
    setFavouritedPhotos((prevFavourites) => {
      if (prevFavourites.includes(photoId)) {
        return prevFavourites.filter(id => id !== photoId);
      } else {
        return [...prevFavourites, photoId]
      }
    });
  };

  return (
    <div className="App">
      <HomeRoute 
      photos={photos}
      topics={topics}
      favouritedPhotos={favouritedPhotos}
      addOrRemoveFavourite={addOrRemoveFavourite}/>
    </div>
  );
};

export default App;