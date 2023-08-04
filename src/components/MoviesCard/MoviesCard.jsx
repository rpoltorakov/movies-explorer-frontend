import './MoviesCard.css'
import React from 'react'
import moviesCardImage from '../../images/Banksy-Most-Wanted.png'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function MoviesCard() {
  const location = useLocation()
  const [isSaved, setIsSaved] = useState(false)

  function handleToggleButton() {
    setIsSaved(!isSaved)
  } 

  return (
    <div className='moviesCard'>

      <div className='moviesCard__container'>
        <h3 className='moviesCard__title'>В погоне за Бенкси</h3>
        <p className='moviesCard__length'>27 минут</p>
      </div>

      <img className='moviesCard__image' src={moviesCardImage} alt="В погоне за Бенкси" />

      {location.pathname === "/movies" ? (
        <button 
          className={`moviesCard__button ${isSaved ? '' : 'moviesCard__button_saved'}`} 
          type='button' 
          onClick={handleToggleButton}
        >{`${isSaved ? 'Сохранить' : ''}`}</button>
      ) : (
        <button
          className='moviesCard__button moviesCard__button_delete'
          type='button'
        />
      )}

    </div>
  );
}

export default MoviesCard;