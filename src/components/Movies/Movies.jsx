import Footer from '../Footer/Footer';
import './Movies.css'
import React from 'react'
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Popup from '../Popup/Popup';

function Movies({ isOpened, onClose, onClick }) {
  return (
    <div className='movies'>
      <Header onClick={onClick} />

      <main className='movies__wrapper'>
        <Popup isOpened={isOpened} onClose={onClose} />
        <SearchForm />
        <MoviesCardList />
        <button className='movies__buttonMore' type='button'>Ещё</button>
      </main>

      <Footer />
    </div>
  );
}

export default Movies;