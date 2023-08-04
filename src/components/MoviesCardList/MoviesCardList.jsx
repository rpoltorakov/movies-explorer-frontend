import './MoviesCardList.css'
import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className='moviesCardList'>
      <div className='moviesCardList__container'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </section>
  );
}

export default MoviesCardList