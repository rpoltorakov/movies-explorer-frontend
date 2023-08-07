import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import './Profile.css'
import React from 'react'

function Profile() {
  return (
    <div className='profile'>

      <Header />
      <Popup />

      <form className='profile__section'>
        <h2 className='profile__title'>Привет, Роман!</h2>          

          <div className="profile__wrapper">
            <p className="profile__inputName profile__input_bordered">Имя</p>
            <input 
              className="profile__input profile__input_bordered"
              placeholder='Роман'
            />
            <p className="profile__inputName">E-mail</p>
            <input
              className="profile__input"
              placeholder='pochta@yandex.ru'
            />
          </div>

          <div className="profile__buttons">
            <button className="profile__button profile__editButton">Редактировать</button>
            <button className="profile__button profile__saveButton">Сохранить</button>
            <button className="profile__button profile__signoutButton">Выйти из аккаунта</button>
          </div>
      </form>

    </div>
  );
}

export default Profile;