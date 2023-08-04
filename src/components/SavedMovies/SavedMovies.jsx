import './SavedMovies.css'
import React from 'react'
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <section className='savedMovies'>
      <Header />

      <Popup />
      <SearchForm />
      <MoviesCardList />

      <Footer />
    </section>
  );
}

export default SavedMovies;