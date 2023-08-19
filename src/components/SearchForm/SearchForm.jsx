import './SearchForm.css'
import React from 'react'
import searchIcon from '../../images/search-icon.svg'
import { useLocation } from 'react-router-dom';

function SearchForm({ searchValue, setSearchValue, onSearch, checkbox, handleCheckboxChange }) {
  const location = useLocation()

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchValue && location.pathname === '/movies') {
      onSearch(searchValue, checkbox)
    }
  }

  function handleSearchValueChange(evt) {
    setSearchValue(evt.target.value)
  }
  function onCheckboxChange(evt) {
    handleCheckboxChange(evt.target.checked)
    localStorage.setItem('lastCheckbox', evt.target.checked)
  }

  return (
    <section className='searchForm'>

      <div className='searchForm__searchStringWrapper'>
        <form name='search' className='searchForm__searchString' onSubmit={handleSubmit}>
          <img
            className='searchForm__icon'
            src={searchIcon}
            alt="Иконка поиска"
          />
          <input
            type='text'
            placeholder='Фильм'
            className='searchForm__input'
            value={searchValue}
            onChange={handleSearchValueChange}
          />
          <button className='searchForm__button' />
        </form>
      </div>


      <div className='searchForm__checkboxWrapper'>
        <label className="searchForm__switch" htmlFor='searchFormCheckbox'>
          <input
            id='searchFormCheckbox'
            className="searchForm__checkbox"
            type="checkbox"
            checked={checkbox}
            onChange={onCheckboxChange}
          />
          <span className="searchForm__slider" />
        </label>
        <h2 className="searchForm__checkboxTitle">Короткометражки</h2>
      </div>

    </section>
  );
}

export default SearchForm;