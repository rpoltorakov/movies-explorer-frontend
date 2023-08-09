import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

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
          element={<Profile isOpened={isPopupOpened} onClose={closePopup} onClick={handlePopupClick}/>}
        />

        <Route
          path='/signup'
          element={<Register />}
        />

        <Route 
          path='/signin'
          element={<Login />}
        />

        <Route
          path='/*'
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
