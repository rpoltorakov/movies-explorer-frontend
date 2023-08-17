import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import './Profile.css';


function Profile({ isOpened, onClose, onClick, onLogout, currentUser, setCurrentUser, profileError, setProfileError, handlePatchUser }) {
  const [editMode, setEditMode] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [valuesChanged, setValuesChanged] = React.useState(true);
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  function handleProfileEditButton(evt) {
    evt.preventDefault()
    setEditMode(true)
  }

  async function handleProfileSubmit(evt) {
    try {
      evt.preventDefault()
      handlePatchUser({ email, name })
      setEditMode(false)
    } catch(err) {
      console.error('error', err)
    } 
  }

  React.useEffect(() => {
    if (currentUser.name && currentUser.email) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  React.useEffect(() => {
    if (name !== currentUser.name || email !== currentUser.email) {
      setValuesChanged(true)
    } else {
      setValuesChanged(false)
    }
  }, [name, email, currentUser.name, currentUser.email]);

  function onSignout() {
    onLogout()
  }

  function handleNameChange(evt) {
    const newName = evt.target.value
    if (newName.length < 2) {
      setNameError('Имя должно быть не короче 2 симв.')
    } else if (newName.length > 40) {
      setNameError('Имя должно быть короче 40 симв.')
    } else if (/^[a-zA-Z- ]+$/.test(newName)) {
      setNameError('Имя должно быть на кириллице')
    } else {
      setNameError('')
    }
    setName(newName)
  }
  function handleEmailChange(evt) {
    const newEmail = evt.target.value
    if ( !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(newEmail)) ) {
      setEmailError('Введите верный формат почты')
    } else {
      setEmailError('')
    }
    setEmail(newEmail)
  }

  return (
    <div className='profile'>
      <Header onClick={onClick} />
      <Popup isOpened={isOpened} onClose={onClose} />
      
      <form id='profile' className='profile__section' onSubmit={handleProfileSubmit}>

        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>          

        <div className="profile__wrapper">
          <label className="profile__inputName profile__input_bordered" htmlFor='profileName'>Имя</label>
          <input
            id='profileName'
            className="profile__input profile__input_bordered"
            readOnly={!editMode}
            value={name}
            onChange={handleNameChange}
          />
          <label className="profile__inputName" htmlFor='profileEmail'>E-mail</label>
          <input
            id='profileEmail'
            className="profile__input"
            readOnly={!editMode}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        
        {nameError && <label className='profile__error'>{nameError}</label>}
        {emailError && <label className='profile__error'>{emailError}</label>}
        {profileError && <label className='profile__error'>Что-то пошло не так...</label>}

        <div className="profile__buttons">
          {
            editMode ? 
              (
                <button
                  className={`profile__button ${valuesChanged && !nameError && !emailError ? 'profile__saveButton' : ''}`}
                  type='submit'
                  disabled={!valuesChanged || nameError || emailError}
                >Сохранить</button>
              )
              : (
                <button 
                  className="profile__button profile__editButton"
                  onClick={handleProfileEditButton}
                >Редактировать</button>
              )
          }
          <Link to='/signin' className="profile__button profile__signoutButton" onClick={onSignout}>Выйти из аккаунта</Link>
        </div>

      </form>


    </div>
  );
}

export default Profile;