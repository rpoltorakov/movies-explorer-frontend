import './Register.css'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register({ onRegister, isError }) {
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('Роман')

  const handleChangeEmail = (e) => {
    const {value} = e.target
    setEmail(value)
  }
  const handleChangePassword = (e) => {
    const {value} = e.target
    setPassword(value)
  }
  const handleChangeName = (e) => {
    const {value} = e.target
    setName(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name, email, password)
  }


  return (
    <main className='register'>
      <div className="register__content">
        <Link className='register__logo' to='/'>
          <img src={logo} alt="Логотип" />
        </Link>

        <h2 className="register__title">Добро пожаловать!</h2>

        <form className="register__form" onSubmit={handleSubmit}>

          <label htmlFor="" className="register__input-label">Имя</label>
          <input
            type="text"
            className="register__input"
            // defaultValue='Роман'
            placeholder='Введите имя'
            minLength='2'
            maxLength='200'
            required
            value={name}
            onChange={handleChangeName}
          />

          <label htmlFor="" className="register__input-label">E-mail</label>
          <input
            type="email"
            className="register__input"
            // defaultValue='pochta@yandex.ru'
            placeholder='Введите почту'
            minLength='2'
            maxLength='200'
            required
            value={email}
            onChange={handleChangeEmail}
          />

          <label htmlFor="" className="register__input-label">Пароль</label>
          <input
            type="password"
            className="register__input"
            placeholder='Введите пароль'
            minLength='2'
            maxLength='200'
            required
            value={password}
            onChange={handleChangePassword}
          />
          {isError && <span className="register__input-error">Что-то пошло не так...</span>}

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
      </div>
    </main>
  );
}

export default Register;