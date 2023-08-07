import './SavedMovies.css'
import React from 'react'
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ isOpened, onClose, onClick }) {
  return (
    <section className='savedMovies'>
      <Header onClick={onClick} />

      <Popup isOpened={isOpened} onClose={onClose} />
      <SearchForm />
      <MoviesCardList />

      <Footer />
    </section>
  );
}

export default SavedMovies;