import { NavLink } from 'react-router-dom';
import './Navigation.css'
import React from 'react'

function Navigation() {
  return (
    <div className='navigation'>
      <NavLink
        to='/movies'
        className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
      >Фильмы</NavLink>
      <NavLink
        to='/saved-movies'
        className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
      >Сохраненные фильмы</NavLink>
    </div>
  );
}

export default Navigation;