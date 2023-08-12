import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import moviesApi from '../../utils/MoviesApi'
import mainApi from '../../utils/MainApi'

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isShortMoviesSelected, setIsShortMoviesSelected] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {

  })

  // get user info
  useEffect(() => {
    if (loggedIn) {
      mainApi.getCurrentUser()
        .then((user) => {
          console.log("🚀 ~ user in effect:", user)
          setCurrentUser(user)
        })
        .catch(err => {console.log(err)})
    }
  }, [loggedIn])

  function handleRegister(name, email, password) {
    mainApi.signup({ name, email, password })
      .then(() => {
        navigate('/signin', { replace: true })
      })
      .catch(err => {console.log(err)})
  }

  function handleLogin(email, password) {
    if (!email || !password) {
      return
    }
    mainApi.signin({ email, password })
      .then(() => {
        setLoggedIn(true)
        navigate('/')
      })
      .catch(err => {
        // setTooltipOpen(true)
        // setIsRegisterSuccess(false)
        // setAuthMessage('smth gone wrong...')
        console.log(err)
      })
  }

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
          element={<Main loggedIn={loggedIn} />}
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
          element={<Register onRegister={handleRegister} />}
        />

        <Route 
          path='/signin'
          element={<Login onLogin={handleLogin} />}
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
