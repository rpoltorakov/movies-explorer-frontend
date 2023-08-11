import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login() {
  return (
    <main className='login'>
      <div className="login__content">
        <Link className='login__logo' to='/'>
          <img src={logo} alt="Логотип" />
        </Link>

        <h2 className="login__title">Рады видеть!</h2>

        <form className="login__form">

          <label htmlFor="" className="login__input-label">E-mail</label>
          <input
            type="email"
            className="login__input"
            defaultValue='pochta@yandex.ru'
            placeholder='Введите почту'
            minLength='2'
            maxLength='200'
            required
          />

          <label htmlFor="" className="login__input-label">Пароль</label>
          <input
            type="password"
            className="login__input"
            placeholder='Введите пароль'
            minLength='2'
            maxLength='200'
            required
          />
          <span className="login__input-error"></span>

          <div className="login__wrapper">
            <button className="login__signinButton" type='submit'>
              Войти
            </button>
            <p className="login__text">
              Ещё не зарегистрированы?
              <Link to='/signup' className="login__signupButton"> Регистрация</Link>
            </p>
            
          </div>
            
        </form>
      </div>
    </main>
  );
}

export default Login;