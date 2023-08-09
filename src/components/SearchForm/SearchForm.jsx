import './SearchForm.css'
import React from 'react'
import searchIcon from '../../images/search-icon.svg'

function SearchForm() {
  return (
    <section className='searchForm'>

      <div className='searchForm__searchStringWrapper'>
        <form className='searchForm__searchString'>
          <img
            className='searchForm__icon'
            src={searchIcon}
            alt="Иконка поиска"
          />
          <input
            type='text'
            placeholder='Фильм'
            required
            className='searchForm__input'
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
          />
          <span className="searchForm__slider" />
        </label>
        <h2 className="searchForm__checkboxTitle">Короткометражки</h2>
      </div>

    </section>
  );
}

export default SearchForm;