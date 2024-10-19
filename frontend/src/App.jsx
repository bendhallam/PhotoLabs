import React, { useState } from "react";

import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import topics from 'mocks/topics';
import PhotoDetailsModal from "routes/PhotoDetailsModal";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    addOrRemoveFavourite,
    handlePhotoSelect,
    closeModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
      photos={state.photoData}
      topics={state.topicData}
      favouritedPhotos={state.favouritedPhotos}
      addOrRemoveFavourite={addOrRemoveFavourite} // Pass the favourite/unfavourite handler
      handlePhotoSelect={handlePhotoSelect} // Pass the photo click handler
      />
      {state.selectedPhoto && <PhotoDetailsModal 
        photo={state.selectedPhoto} 
        onClose={closeModal} 
        favouritedPhotos={state.favouritedPhotos}
        addOrRemoveFavourite={addOrRemoveFavourite} // Pass the favourite/unfavourite handler
        />} {/*Render modal if photo is selected*/}
    </div>
  );
};

export default App;