import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';


function Movies({
  onMount,

  isOpened,
  onClose,
  onClick,

  searchValue,
  setSearchValue,
  onSearch,
  checkbox,
  handleCheckboxChange,

  movies,
  savedMovies,
  saveMovie,
  deleteMovie,
  filteredMovies,
  moviesNotFound,

  isLoading
}) {
  React.useEffect(() => {
    onMount()
  }, [])

  return (
    <div className='movies'>
      <Header onClick={onClick} />
      <main className='movies__wrapper'>
        <Popup isOpened={isOpened} onClose={onClose} />
        <SearchForm 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={onSearch}
          checkbox={checkbox}
          handleCheckboxChange={handleCheckboxChange}
        />
        <MoviesCardList 
          movies={movies}
          saveMovie={saveMovie}
          savedMovies={savedMovies}
          deleteMovie={deleteMovie}
          moviesNotFound={moviesNotFound}
        />
        {isLoading && <Preloader />}
      </main>

      <Footer />
    </div>
  );
}

export default Movies;