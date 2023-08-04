import './Popup.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';

function Popup() {
  return (
    <div className='popup popup_opened'>
      <div className='popup__container'>
        <button className='popup__closeButton' />

        <div className='popup__links'>
          <NavLink
            to='/'
            className={({ isActive }) => `popup__link ${isActive ? 'popup__link_active' : ''}`}
          >Главная</NavLink>
          <NavLink
            to='/movies'
            className={({ isActive }) => `popup__link ${isActive ? 'popup__link_active' : ''}`}
          >Фильмы</NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) => `popup__link ${isActive ? 'popup__link_active' : ''}`}
          >Сохранённые фильмы</NavLink>
        </div>

        <div className="popup__account">
          <Account />
        </div>
      </div>
    </div>
  );
}

export default Popup;