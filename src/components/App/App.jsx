import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  function closePopup() {
    setIsPopupOpened(false)
  }

  function handlePopupClick() {
    setIsPopupOpened(true)
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />

        <Route 
          path='/movies' 
          element={<Movies isOpened={isPopupOpened} onClose={closePopup} onClick={handlePopupClick} />} 
        />

        <Route
          path='/saved-movies'
          element={<SavedMovies isOpened={isPopupOpened} onClose={closePopup} onClick={handlePopupClick} />}
        />

        <Route
          path='/profile'
          element={<Profile />}
        />
      </Routes>
    </div>
  );
}

export default App;
