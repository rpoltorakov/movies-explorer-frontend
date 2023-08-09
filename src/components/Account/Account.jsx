import './Account.css'
import React from 'react'
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg'

function Account() {
  return (
    <Link className='account' to='/profile'>
      <p className='account__text'>Аккаунт</p>
      <img className='account__icon' src={profileIcon} alt='' />
    </Link>
  );
}

export default Account;