import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Popup from '../Popup/Popup';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { filterMovies } from '../../utils/utils';

function SavedMovies({
  onMount,

  isOpened,
  onClose,
  onClick,
  
  searchValueSaved,
  setSearchValueSaved,
  onSearch,
  checkbox,
  handleCheckboxChange,

  savedMovies,
  deleteMovie,
}) {
  const [savedFilteredMovies, setSavedFilteredMovies] = React.useState(filterMovies(searchValueSaved, savedMovies, checkbox));
  React.useEffect(() => {
    onMount()
  }, [])
  React.useEffect(() => {
    setSavedFilteredMovies(filterMovies(searchValueSaved, savedMovies, checkbox))
  }, [searchValueSaved, checkbox, savedMovies])

  return (
    <main className='savedMovies'>
      <Header onClick={onClick} />

      <main className="savedMovies__wrapper">
        <Popup isOpened={isOpened} onClose={onClose} />
        <SearchForm 
          searchValue={searchValueSaved}
          setSearchValue={setSearchValueSaved}
          onSearch={onSearch}
          checkbox={checkbox}
          handleCheckboxChange={handleCheckboxChange}
        />
        <MoviesCardList 
          movies={savedFilteredMovies}
          deleteMovie={deleteMovie}
        />
      </main>

      <Footer />
    </main>
  );
}

export default SavedMovies;