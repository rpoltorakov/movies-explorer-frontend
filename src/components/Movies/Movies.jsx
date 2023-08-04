import Footer from '../Footer/Footer';
import './Movies.css'
import React from 'react'
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Popup from '../Popup/Popup';

function Movies() {
  return (
    <div className='movies'>
      <Header />

      <Popup />
      <SearchForm />
      <MoviesCardList />

      <button className='movies__buttonMore' type='button'>Ещё</button>

      <Footer />
    </div>
  );
}

export default Movies;