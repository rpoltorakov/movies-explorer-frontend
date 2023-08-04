import './NavTab.css'
import React from 'react'
import logo from '../../images/logo.svg'

function NavTab() {
  return (
    <header className='navTab'>
      <img className='navTab__logo' src={logo} alt="Логотип проекта" />
      
      <nav className='navTab__buttons'>
        <div className='navTab__button'>Регистрация</div>
        <div className='navTab__button navTab__button_accent'>Войти</div>
      </nav>
    </header>
  );
}

export default NavTab;