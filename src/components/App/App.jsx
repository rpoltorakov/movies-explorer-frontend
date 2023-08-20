import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/utils';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValueSaved, setSearchValueSaved] = useState('');
  const [profileError, setProfileError] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [profileChanged, setProfileChanged] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false)
  const [checkboxSaved, setCheckboxSaved] = useState(false);

  const navigate = useNavigate();

  async function handleUserCheckFull() {
    try {
      if (localStorage.getItem('loggedIn')) {
        const user = await mainApi.getCurrentUser()
        setCurrentUser(user.user)
        setLoggedIn(true)
        setIsLoading(true)
        const downloadedSavedMovies = await mainApi.getMovies()
        setSavedMovies(downloadedSavedMovies)
        setIsLoading(false)

        setSearchValue(localStorage.getItem('cachedQuery'))
        setCheckbox(localStorage.getItem('lastCheckbox') === 'true')
      }
    } catch(err) {
      console.error('error', err)
      if (err === 401) {
        setLoggedIn(false)
        localStorage.clear()
        navigate('/')
      }
    }
    
  }
  useEffect(() => {
    handleUserCheckFull()
  }, [Movies, SavedMovies])

  useEffect(() => {
    if (loggedIn) {
      mainApi.getCurrentUser()
        .then((user) => {
          setCurrentUser(user.user)
        })
        .catch(err => {
          if (err === 401) {
            setLoggedIn(false)
            localStorage.clear()
            navigate('/')
          }
          console.error(err)
        })
    }
  }, [loggedIn, navigate])

  async function handleRegister(name, email, password) {
    try {
      const newUser = await mainApi.signup({ name, email, password })
      await handleLogin(email, password)
    } catch(err) {
      console.error('error', err)
    }
  }
  function handleLogin(email, password) {
    if (!email || !password) {
      return
    }
    mainApi.signin({ email, password })
      .then(() => {
        localStorage.setItem('loggedIn', true)
        setLoggedIn(true)
        navigate('/movies')
        setIsLoginError(false)
      })
      .catch(err => {
        console.error(err)
        setIsLoginError(true)
      })
  }
  function handleLogout() {
    mainApi.signout()
      .then(() => {
        setLoggedIn(false)
        localStorage.clear()
        navigate('/')
      })
      .catch(err => {
        console.error(err)
      })
  }

  function closePopup() {
    setIsPopupOpened(false)
  }
  function handlePopupClick() {
    setIsPopupOpened(!isPopupOpened)
  }

  async function saveMovie(movie) {
    try {
      const saved = await mainApi.createMovie(movie)
      setSavedMovies([...savedMovies, saved])  
    } catch(err) {
      console.error('error', err)
      setLoggedIn(false)
      localStorage.clear()
      navigate('/')
    }
    
  }

  async function deleteMovie(movie) {
    try {
      const deletedMovie = await mainApi.deleteMovie(movie)
      setSavedMovies(savedMovies.filter(m => m._id !== deletedMovie._id))
    } catch(err) {
      console.error('error', err)
      setLoggedIn(false)
      localStorage.clear()
      navigate('/')
    }
  }

  async function handleSearch(query, checkbox) {
    try {
      if (query.length !== 0) {
        await mainApi.getCurrentUser()
        setIsLoading(true)
        const downloadedMovies = await moviesApi.getMoviesList()
        localStorage.setItem('cachedQuery', query)
        localStorage.setItem('lastCheckbox', JSON.stringify(checkbox))
        localStorage.setItem('cachedMovies', JSON.stringify(downloadedMovies))
        const filteredMovies = filterMovies(query, downloadedMovies, checkbox)
        setFoundMovies(filteredMovies)
        if (filteredMovies.length === 0) {
          setMoviesNotFound(true)
        } else {
          setMoviesNotFound(false)
        }
        setIsLoading(false)
        setIsSearchError(false)
        return
      } else {
        setIsSearchError(true)
      }
    } catch(err) {
      if (err === 401) {
        setLoggedIn(false)
        localStorage.clear()
        navigate('/')
      }
      console.error('error', err)
    }
  }

  async function handleSearchSaved(query) {
    const downloadedSavedMovies = await mainApi.getMovies()
    setSavedMovies(downloadedSavedMovies)
  }

  async function handleCheckboxChange(checkbox) {
    try {
      setCheckbox(checkbox)
      const downloadedMovies = JSON.parse(localStorage.getItem('cachedMovies'))
      setFoundMovies(filterMovies(searchValue, downloadedMovies, checkbox))
    } catch (err) {
      console.error('error', err)
    }
  }

  function onMoviesMount() {
    const cachedMovies = JSON.parse(localStorage.getItem('cachedMovies'))
    const cachedQuery = localStorage.getItem('cachedQuery')
    if (cachedMovies && cachedQuery) {
      setFoundMovies(filterMovies(cachedQuery, cachedMovies, checkbox))
      setIsSearchError(false)
    }
  }
  async function onSavedMoviesMount() {
    try {
      const downloadedSavedMovies = await mainApi.getMovies()
      setSavedMovies(downloadedSavedMovies)
      setSearchValueSaved('')
    } catch(err) {
      if (err === 401) {
        setLoggedIn(false)
        localStorage.clear()
        navigate('/')
      }
      console.error('error', err)
    }
  }

  async function handlePatchUser(data) {
    try {
      setIsLoading(true)
      const newCurrentUser = await mainApi.patchCurrentUser(data)
      setCurrentUser(newCurrentUser)
      setProfileError(false)
      setProfileChanged(true)
      setIsLoading(false)
    } catch(err) {
      setProfileError(true)
      setProfileChanged(false)
      console.error('error', err)
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path='/'
            element={
              <Main
                loggedIn={loggedIn}
                isOpened={isPopupOpened}
                onClose={closePopup}
                onClick={handlePopupClick}
              />
            }
          />

          <Route 
            path='/movies' 
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
                
                onMount={onMoviesMount}

                isOpened={isPopupOpened}
                onClose={closePopup}
                onClick={handlePopupClick}

                searchValue={searchValue}
                setSearchValue={setSearchValue}
                checkbox={checkbox}
                handleCheckboxChange={handleCheckboxChange}
                onSearch={handleSearch}
                isSearchError={isSearchError}

                movies={foundMovies}
                savedMovies={savedMovies}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}

                isLoading={isLoading}
                moviesNotFound={moviesNotFound}
              />
            } 
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}

                onMount={onSavedMoviesMount}

                isOpened={isPopupOpened}
                onClose={closePopup}
                onClick={handlePopupClick}
                
                savedMovies={savedMovies}
                deleteMovie={deleteMovie}

                searchValueSaved={searchValueSaved}
                setSearchValueSaved={setSearchValueSaved}
                checkbox={checkboxSaved}
                handleCheckboxChange={setCheckboxSaved}
                onSearch={handleSearchSaved}
              />
            }
          />

          <Route
            path='/profile'
            element={
              <ProtectedRouteElement 
                element={Profile}
                isOpened={isPopupOpened}
                onClose={closePopup}
                onClick={handlePopupClick}
                onLogout={handleLogout}
                loggedIn={loggedIn}

                handlePatchUser={handlePatchUser}

                currentUser={currentUser}
                setCurrentUser={setCurrentUser}

                profileError={profileError}
                setProfileError={setProfileError}
                profileChangedMessage={profileChanged}

                isLoading={isLoading}
                setProfileChanged={setProfileChanged}
              />
            }
          />

          <Route
            path='/signup'
            element={
              <Register
                onRegister={handleRegister}
                isError={isLoginError}
                loggedIn={loggedIn} 
              />
            }
          />

          <Route 
            path='/signin'
            element={
              <Login
                onLogin={handleLogin}
                loggedIn={loggedIn}
                isError={isLoginError}
                setIsLoginError={setIsLoginError}
              />
            }
          />

          <Route
            path='/*'
            element={<NotFound />}
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
