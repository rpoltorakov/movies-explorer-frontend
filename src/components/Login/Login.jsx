import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login({ onLogin }) {
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  const [password, setPassword] = React.useState('');

  const handleChangeEmail = (e) => {
    const {value} = e.target
    setEmail(value)
  }
  const handleChangePassword = (e) => {
    const {value} = e.target
    setPassword(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <main className='login'>
      <div className="login__content">
        <Link className='login__logo' to='/'>
          <img src={logo} alt="Логотип" />
        </Link>

        <h2 className="login__title">Рады видеть!</h2>

        <form className="login__form" onSubmit={handleSubmit}>

          <label htmlFor="" className="login__input-label">E-mail</label>
          <input
            type="email"
            className="login__input"
            // defaultValue='pochta@yandex.ru'
            placeholder='Введите почту'
            minLength='2'
            maxLength='200'
            required
            value={email}
            onChange={handleChangeEmail}
          />

          <label htmlFor="" className="login__input-label">Пароль</label>
          <input
            type="password"
            className="login__input"
            placeholder='Введите пароль'
            minLength='2'
            maxLength='200'
            required
            value={password}
            onChange={handleChangePassword}
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