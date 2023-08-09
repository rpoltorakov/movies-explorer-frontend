import './Register.css'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register() {
  return (
    <main className='register'>
      <Link className='register__logo'>
        <img src={logo} alt="Логотип" />
      </Link>

      <h2 className="register__title">Добро пожаловать!</h2>

      <form className="register__form">

        <label htmlFor="" className="register__input-label">Имя</label>
        <input
          type="text"
          className="register__input"
          defaultValue='Роман'
          placeholder='Введите имя'
        />

        <label htmlFor="" className="register__input-label">E-mail</label>
        <input
          type="email"
          className="register__input"
          defaultValue='pochta@yandex.ru'
          placeholder='Введите почту'
        />

        <label htmlFor="" className="register__input-label">Пароль</label>
        <input
          type="password"
          className="register__input"
          placeholder='Введите пароль'
        />
        <span className="register__input-error">Что-то пошло не так...</span>

        <div className="register__wrapper">
          <button className="register__signupButton" type='submit'>
            Зарегистрироваться
          </button>
          <p className="register__text">
            Уже зарегистрированы?
            <Link to='/signin' className="register__signinButton"> Войти</Link>
          </p>
          
        </div>
          
      </form>
    </main>
  );
}

export default Register;