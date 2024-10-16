import React, { useEffect, useState } from "react";


import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favouritedPhotos, setFavouritePhotos] = useState([]);
  return (
    <div className="App">
      <HomeRoute 
      photos={photos}
      topics={topics}
      favouritedPhotos={favouritedPhotos}/>
    </div>
  );
};

export default App;