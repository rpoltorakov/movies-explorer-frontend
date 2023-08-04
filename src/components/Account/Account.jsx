import './Account.css'
import React from 'react'
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg'

function Account() {
  return (
    <Link className='header__account'>
      <p className='header__accountText'>Аккаунт</p>
      <img className='header__accountIcon' src={profileIcon} alt='' />
    </Link>
  );
}

export default Account;