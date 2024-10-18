import React, { useState } from "react";

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from "routes/PhotoDetailsModal";


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
        return [...prevFavourites, photoId];
      }
    });
  };


  // Set modal open or close state (ie. check if photo is selected or not)
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // Handle selecting photo
  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);// Set the selected photo and open modal
  }
  const closeModal = () => {
    setSelectedPhoto(null); // Clear selected photo and close modal
  }

  return (
    <div className="App">
      <HomeRoute 
      photos={photos}
      topics={topics}
      favouritedPhotos={favouritedPhotos}
      addOrRemoveFavourite={addOrRemoveFavourite} // Pass the favourite/unfavourite handler
      handlePhotoSelect={handlePhotoSelect} // Pass the photo click handler
      />
      {selectedPhoto && <PhotoDetailsModal 
        photo={selectedPhoto} 
        onClose={closeModal} 
        favouritedPhotos={favouritedPhotos}
        addOrRemoveFavourite={addOrRemoveFavourite} // Pass the favourite/unfavourite handler
        />} {/*Render modal if photo is selected*/}
    </div>
  );
};

export default App;