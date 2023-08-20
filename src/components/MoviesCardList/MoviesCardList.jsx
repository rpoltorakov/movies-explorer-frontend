import './MoviesCardList.css'
import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import {
  WIDTH_S,
  WIDTH_M,
  CARDS_COUNT_S,
  CARDS_COUNT_M,
  CARDS_COUNT_L,
  CARDS_STEP_S,
  CARDS_STEP_M,
} from '../../utils/constants';


function MoviesCardList({
  movies,

  saveMovie,
  savedMovies,
  deleteMovie,
  moviesNotFound
}) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [cardsMaxCount, setCardsMaxCount] = React.useState(
    window.innerWidth <= WIDTH_S ? CARDS_COUNT_S :
    window.innerWidth > WIDTH_S && window.innerWidth < WIDTH_M ? CARDS_COUNT_M : CARDS_COUNT_L
  );
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const [increment, setIncrement] = React.useState(0);
  const [incrementStep, setIncrementStep] = React.useState(
    window.innerWidth <= WIDTH_S ? CARDS_STEP_S :
    window.innerWidth > WIDTH_S && window.innerWidth < WIDTH_M ? CARDS_STEP_S : CARDS_STEP_M
  )
  const [moviesLeft, setMoviesLeft] = React.useState(movies.length > cardsMaxCount);

  const location = useLocation()

  async function updateWidth() {
    setTimeout(() => {setWidth(window.innerWidth)}, 100);
  }
  React.useEffect(() => {
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  React.useEffect(() => {
    setIncrementStep(
      window.innerWidth <= WIDTH_S ? CARDS_STEP_S :
      window.innerWidth > WIDTH_S && window.innerWidth < WIDTH_M ? CARDS_STEP_S : CARDS_STEP_M
    )
  }, [width])

  React.useEffect(() => {
    setCardsMaxCount(increment*incrementStep + (
      width <= WIDTH_S ? CARDS_COUNT_S :
      width > WIDTH_S && width < WIDTH_M ? CARDS_COUNT_M : CARDS_COUNT_L
    ))
  }, [width, increment])

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      setFilteredMovies(movies.slice(0, cardsMaxCount))
      setMoviesLeft(movies.length > cardsMaxCount)
    } else {
      setFilteredMovies(movies)
    }
  }, [movies, cardsMaxCount])

  function handleMore() {
    setIncrement(increment + 1)
  }
  
  return (
    <section className='moviesCardList'>
      <div className='moviesCardList__container'>
        {
          filteredMovies.map(movie => (
            <MoviesCard 
              key={movie.id || movie.movieId}
              movie={movie}
              deleteMovie={deleteMovie}
              saveMovie={saveMovie}
              saved={movie}
              savedMovies={savedMovies}
            />
          ))
        }
      </div>
      {moviesNotFound && <p className='moviesCardList__nothingFound'>Ничего не найдено</p>}
      {location.pathname === '/movies' && moviesLeft && <button className='movies__buttonMore' type='button' onClick={handleMore}>Ещё</button>}
    </section>
  );
}

export default MoviesCardList