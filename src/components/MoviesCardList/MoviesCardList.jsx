import './MoviesCardList.css'
import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,

  saveMovie,
  savedMovies,
  deleteMovie,
  moviesNotFound
}) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [cardsMaxCount, setCardsMaxCount] = React.useState(
    window.innerWidth <= 725 ? 5 :
    window.innerWidth > 725 && window.innerWidth < 1153 ? 8 : 12
  );
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const [increment, setIncrement] = React.useState(0);
  const [incrementStep, setIncrementStep] = React.useState(
    window.innerWidth <= 725 ? 2 :
    window.innerWidth > 725 && window.innerWidth < 1153 ? 2 : 3
  )
  const [moviesLeft, setMoviesLeft] = React.useState(movies.length > cardsMaxCount);

  // const [moviesNotFound, setMoviesNotFound] = React.useState(false);
  
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
      window.innerWidth <= 725 ? 2 :
      window.innerWidth > 725 && window.innerWidth < 1153 ? 2 : 3
    )
  }, [width])

  React.useEffect(() => {
    setCardsMaxCount(increment*incrementStep + (
      width <= 725 ? 5 :
      width > 725 && width < 1153 ? 8 : 12
    ))
  }, [width, increment])

  React.useEffect(() => {
    // if (movies.length === 0) {
    //   setMoviesNotFound(true)
    // }
    setFilteredMovies(movies.slice(0, cardsMaxCount))
    setMoviesLeft(movies.length > cardsMaxCount)
  }, [movies, cardsMaxCount])
  
  // React.useMemo(() => {
  //   if (!filteredMovies.length && !movies.length) {
  //     setMoviesNotFound(true)
  //   } else {
  //     setMoviesNotFound(false)
  //   }
  //   // console.log('fire')
  // }, [filteredMovies, movies])

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
      {/* {!filteredMovies.length && !movies.length && <p className='moviesCardList__nothingFound'>Ничего не найдено</p>} */}
      {moviesNotFound && <p className='moviesCardList__nothingFound'>Ничего не найдено</p>}
      {moviesLeft && <button className='movies__buttonMore' type='button' onClick={handleMore}>Ещё</button>}
    </section>
  );
}

export default MoviesCardList