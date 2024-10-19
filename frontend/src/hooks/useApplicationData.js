import React, { useReducer, useEffect } from 'react';

// Define the initial state
const initialState = {
  favouritedPhotos: [],
  selectedPhoto: null,
  photoData: [],
  topicData: []
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload};
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

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }))
  }, []);

  return {
    state,
    addOrRemoveFavourite,
    handlePhotoSelect,
    closeModal,
    setFavouritedPhotos, // Expose setFavouritedPhotos if needed
  };
};

export default useApplicationData;