import React, { useState } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
     favouritedPhotos: [],
     selectedPhoto: null
  });

  // Initialize setFavouritedPhotos
  const setFavouritedPhotos = (favouritedPhotos) => {
    setState((prevState) => ({
      ...prevState,
      favouritedPhotos
    }));
  };

  // Intialize setSelectedPhoto
  const setSelectedPhoto = (selectedPhoto) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto
    }));
  };

  // Handle pressing heart button
   const addOrRemoveFavourite = (photoId) => {
     setState((prevState) => {
       const { favouritedPhotos } = prevState;

       return {
         ...prevState,
         favouritedPhotos: favouritedPhotos.includes(photoId)
           ? favouritedPhotos.filter((id) => id !== photoId)
           : [...favouritedPhotos, photoId]
       };
     });
   };
   

  // Handle clicking on a photo
  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  // Handle clicking the close button
  const closeModal = () => {
    setSelectedPhoto(null);
  }

  return {
    state,
    addOrRemoveFavourite,
    handlePhotoSelect,
    closeModal
  }
}
 
export default useApplicationData;