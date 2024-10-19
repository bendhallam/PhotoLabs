import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  favouritedPhotos: [],
  selectedPhoto: null,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVOURITED_PHOTOS':
      return {
        ...state,
        favouritedPhotos: action.payload,
      };
    case 'SET_SELECTED_PHOTO':
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case 'ADD_OR_REMOVE_FAVOURITE':
      const { photoId } = action.payload;
      const isFavourite = state.favouritedPhotos.includes(photoId);
      return {
        ...state,
        favouritedPhotos: isFavourite
          ? state.favouritedPhotos.filter((id) => id !== photoId)
          : [...state.favouritedPhotos, photoId],
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        selectedPhoto: null,
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Initialize setFavouritedPhotos
  const setFavouritedPhotos = (favouritedPhotos) => {
    dispatch({ type: 'SET_FAVOURITED_PHOTOS', payload: favouritedPhotos });
  };

  // Initialize setSelectedPhoto
  const setSelectedPhoto = (selectedPhoto) => {
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: selectedPhoto });
  };

  // Handle pressing heart button
  const addOrRemoveFavourite = (photoId) => {
    dispatch({ type: 'ADD_OR_REMOVE_FAVOURITE', payload: { photoId } });
  };

  // Handle clicking on a photo
  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  // Handle clicking the close button
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return {
    state,
    addOrRemoveFavourite,
    handlePhotoSelect,
    closeModal,
    setFavouritedPhotos, // Expose setFavouritedPhotos if needed
  };
};

export default useApplicationData;