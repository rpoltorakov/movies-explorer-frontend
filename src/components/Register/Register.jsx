import './Register.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register({ onRegister, isError, loggedIn }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('')

  const [nameError, setNameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  
  const [submitAllowed, setSubmitAllowed] = React.useState(false);

  const navigate = useNavigate()

  React.useEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  React.useEffect(() => {
    if (!passwordError && !emailError && !nameError) {
      setSubmitAllowed(true)
    } else if (passwordError || emailError || nameError) {
      setSubmitAllowed(false)
    }
    if (password.length === 0 || email.length === 0 || name.length === 0) {
      setSubmitAllowed(false)
    }
  }, [nameError, emailError, passwordError, password, email, name])

  const handleChangeEmail = (evt) => {
    const newEmail = evt.target.value
    if (newEmail.length === 0) {
      setEmailError('')
    } else if ( !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(newEmail)) ) {
      setEmailError('Введите верный формат почты')
    } else {
      setEmailError('')
    }
    setEmail(newEmail)
  }
  const handleChangePassword = (evt) => {
    const newPassword = evt.target.value
    if (newPassword.length < 6 && newPassword.length !== 0) {
      setPasswordError('Пароль должен быть не короче 6 симв.')
    } else if (newPassword.length > 40) {
      setPasswordError('Пароль должен быть короче 40 симв.')
    } else {
      setPasswordError('')
    }
    setPassword(newPassword)
  }
  const handleChangeName = (evt) => {
    const newName = evt.target.value
    if (newName.length < 2 && newName.length !== 0) {
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

          <label htmlFor="" className="register__input-label">
            Имя
            <input
              type="text"
              className="register__input"
              placeholder='Введите имя'
              value={name}
              onChange={handleChangeName}
            />
            {nameError && <span className="register__input-error">{nameError}</span>}
          </label>

          <label htmlFor="" className="register__input-label">
            E-mail
            <input
              className="register__input"
              placeholder='Введите почту'
              value={email}
              onChange={handleChangeEmail}
            />
            {emailError && <span className="register__input-error">{emailError}</span>}
          </label>

          <label htmlFor="" className="register__input-label">
            Пароль
            <input
              type="password"
              className="register__input"
              placeholder='Введите пароль'
              value={password}
              onChange={handleChangePassword}
            />
            {passwordError && <span className="register__input-error">{passwordError}</span>}
          </label>

          <div className="register__wrapper">
            <button 
              className={`register__signupButton ${submitAllowed ? 'register__signupButton_active' : ''}`}
              type='submit'
              disabled={!submitAllowed}
            >
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