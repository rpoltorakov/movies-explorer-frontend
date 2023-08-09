import './NavTab.css'
import React from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <header className='navTab'>
      <img className='navTab__logo' src={logo} alt="Логотип проекта" />
      
      <nav className='navTab__buttons'>
        <Link to='/signup' className='navTab__button'>Регистрация</Link>
        <Link to='/signin' className='navTab__button navTab__button_accent'>Войти</Link>
      </nav>
    </header>
  );
}

export default NavTab;