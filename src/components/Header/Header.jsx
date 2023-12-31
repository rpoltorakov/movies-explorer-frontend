import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation'
import Account from '../Account/Account'

function Header({ onClick }) {
  return (
    <header className='header'>
      <Link className='header__logo' to='/'>
        <img src={logo} alt="Логотип" />
      </Link>

      <Navigation />

      <div className="header__account">
        <Account />
      </div>
      
      <button className='header__popupButton' type='button' onClick={onClick} />
    </header>
  );
}

export default Header;