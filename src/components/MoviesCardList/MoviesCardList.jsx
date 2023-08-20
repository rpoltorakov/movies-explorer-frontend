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
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const [rows, setRows] = React.useState(window.innerWidth <= WIDTH_S ? 5 : 4);
  const [cols, setCols] = React.useState(
    window.innerWidth < WIDTH_S ? 1 :
    window.innerWidth > WIDTH_S && window.innerWidth < WIDTH_M ? 2 : 3
  );
  const [cardsMaxCount, setCardsMaxCount] = React.useState(rows * cols);
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
    const rows = window.innerWidth < WIDTH_S ? 5 : 4
    setRows(rows)
    const cols = getComputedStyle(document.querySelector('.moviesCardList__container')).gridTemplateColumns.split(' ').length
    setCols(cols)
    setCardsMaxCount(rows*cols)
  }, [width, movies])

  React.useEffect(() => {
    setCardsMaxCount(rows*cols)
  }, [rows])

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      setFilteredMovies(movies.slice(0, cardsMaxCount))
      setMoviesLeft(movies.length > cardsMaxCount)
    } else {
      setFilteredMovies(movies)
    }
  }, [movies, cardsMaxCount])

  function handleMore() {
    setRows(rows + 1)
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