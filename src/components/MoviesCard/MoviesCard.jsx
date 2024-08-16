import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, deleteMovie, saveMovie, savedMovies }) {
  const location = useLocation()
  const [isSaved, setIsSaved] = React.useState(false)



  React.useEffect(() => {
    if (location.pathname === '/movies') {
      if (savedMovies.some(savedMovie => savedMovie.movieId === movie.id)) {
        setIsSaved(true)
      }
    }
  }, [isSaved, setIsSaved, movie, savedMovies, location])

  async function handleToggleButton() {
    try {
      if (isSaved) {
        await deleteMovie(savedMovies.filter(m => m.movieId === movie.id)[0]._id)
      } else {
        await saveMovie(movie)
      }
      setIsSaved(!isSaved)
    } catch (error) {
      console.error('error', error)
    }
  } 

  function handleDeleteButton() {
    deleteMovie(movie._id)
  }

  function formatDuration(minutes) {
    let hours = Math.floor(minutes/60)
    const remainder = minutes % 60
    let remainderLabel = ''
    
    if (remainder >= 11 && remainder <= 19 ) {
      remainderLabel = 'минут'
    } else {
      if (remainder % 10 === 1) {
        remainderLabel = 'минута'
      } else if (remainder % 10 in [2,3,4]) {
        remainderLabel = 'минуты'
      } else {
        remainderLabel = 'минут'
      }
    }

    return(`${hours ? `${hours} ${hours > 1 ? 'часа ' : 'час '}` : ''}${remainder ? `${remainder} ${remainderLabel}` : ''}`)
  }

  return (
    <div className='moviesCard'>

      <div className='moviesCard__container'>
        <h3 className='moviesCard__title'>{movie.nameRU}</h3>
        <p className='moviesCard__length'>{formatDuration(movie.duration)}</p>
      </div>
      <a className="moviesCard__image-link" href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className='moviesCard__image' src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU} />
      </a>
      {location.pathname === "/movies" ? (
        <button 
          className={`moviesCard__button ${isSaved ? 'moviesCard__button_saved' : ''}`} 
          type='button' 
          onClick={handleToggleButton}
        >{`${isSaved ? '' : 'Сохранить'}`}</button>
      ) : (
        <button
          className='moviesCard__button moviesCard__button_delete'
          type='button'
          onClick={handleDeleteButton}
        />
      )}

    </div>
  );
}

export default MoviesCard;