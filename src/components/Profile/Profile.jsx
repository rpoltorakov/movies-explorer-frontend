import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import './Profile.css'
import React from 'react'


function Profile({ isOpened, onClose, onClick }) {
  const [editMode, setEditMode] = React.useState(false);

  function handleProfileEditButton(evt) {
    evt.preventDefault()
    setEditMode(true)
  }

  function handleProfileSaveButton(evt) {
    evt.preventDefault()
    setEditMode(false)
  }

  return (
    <div className='profile'>
      <Header onClick={onClick} />
      <Popup isOpened={isOpened} onClose={onClose} />
      
      <form className='profile__section'>

        <h2 className='profile__title'>Привет, Роман!</h2>          

        <div className="profile__wrapper">
          <label className="profile__inputName profile__input_bordered" htmlFor='profileName'>Имя</label>
          <input
            id='profileName'
            className="profile__input profile__input_bordered"
            placeholder='Роман'
            readOnly={!editMode}
            minLength='2'
            maxLength='200'
            required
          />
          <label className="profile__inputName" htmlFor='profileEmail'>E-mail</label>
          <input
            id='profileEmail'
            className="profile__input"
            placeholder='pochta@yandex.ru'
            readOnly={!editMode}
            minLength='2'
            maxLength='200'
            required
          />
        </div>

        <div className="profile__buttons">
          {
            editMode ? 
              (
                <button
                  className="profile__button profile__saveButton"
                  onClick={handleProfileSaveButton}
                >Сохранить</button>
              )
              : (
                <button 
                  className="profile__button profile__editButton"
                  onClick={handleProfileEditButton}
                >Редактировать</button>
              )
          }
          <button className="profile__button profile__signoutButton">Выйти из аккаунта</button>
        </div>

      </form>


    </div>
  );
}

export default Profile;