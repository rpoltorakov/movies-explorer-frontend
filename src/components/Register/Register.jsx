import './Register.css'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register({ onRegister, isError }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('')

  const [nameError, setNameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  

  const handleChangeEmail = (evt) => {
    const newEmail = evt.target.value
    if ( !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(newEmail)) ) {
      setEmailError('Введите верный формат почты')
    } else {
      setEmailError('')
      setEmail(newEmail)
    }
  }
  const handleChangePassword = (evt) => {
    const newPassword = evt.target.value
    if (newPassword.length < 6) {
      setPasswordError('Пароль должен быть не короче 6 симв.')
    } else if (newPassword.length > 40) {
      setPasswordError('Пароль должен быть короче 40 симв.')
    } else {
      setPasswordError('')
      setPassword(newPassword)
    }
  }
  const handleChangeName = (evt) => {
    const newName = evt.target.value
    if (newName.length < 2) {
      setNameError('Имя должно быть не короче 2 симв.')
    } else if (newName.length > 40) {
      setNameError('Имя должно быть короче 40 симв.')
    } else if (/^[a-zA-Z- ]+$/.test(newName)) {
      setNameError('Имя должно быть на кириллице')
    } else {
      setNameError('')
      setName(newName)
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
            placeholder='Введите имя'
            value={name}
            onChange={handleChangeName}
          />
          {nameError && <span className="register__input-error">{nameError}</span>}

          <label htmlFor="" className="register__input-label">E-mail</label>
          <input
            className="register__input"
            placeholder='Введите почту'
            value={email}
            onChange={handleChangeEmail}
          />
          {emailError && <span className="register__input-error">{emailError}</span>}

          <label htmlFor="" className="register__input-label">Пароль</label>
          <input
            type="password"
            className="register__input"
            placeholder='Введите пароль'
            value={password}
            onChange={handleChangePassword}
          />
          {passwordError && <span className="register__input-error">{passwordError}</span>}

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