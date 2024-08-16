import './Login.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login({ onLogin, isError, setIsLoginError, loggedIn, isLoading }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const [submitAllowed, setSubmitAllowed] = React.useState(false)

  const navigate = useNavigate()

  React.useEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  React.useEffect(() => {
    setIsLoginError(false)
    if (!passwordError && !emailError) {
      setSubmitAllowed(true)
    } else if (passwordError || emailError) {
      setSubmitAllowed(false)
    }
    if (password.length === 0 || email.length === 0 ) {
      setSubmitAllowed(false)
    }
  }, [emailError, passwordError, password, email])

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
    if (newPassword.length < 6 && newPassword !== 0) {
      setPasswordError('Пароль должен быть не короче 6 симв.')
    } else if (newPassword.length > 40) {
      setPasswordError('Пароль должен быть короче 40 симв.')
    } else {
      setPasswordError('')
    }
    setPassword(newPassword)
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

        <form name='login' className="login__form" onSubmit={handleSubmit}>

          <label htmlFor="" className="login__input-label">E-mail
            <input
              type="email"
              className="login__input"
              placeholder='Введите почту'
              value={email}
              onChange={handleChangeEmail}
              readOnly={isLoading}
            />
            {emailError && <span className="login__input-error">{emailError}</span>}
          </label>

          <label htmlFor="" className="login__input-label">Пароль
            <input
              type="password"
              className="login__input"
              placeholder='Введите пароль'
              value={password}
              onChange={handleChangePassword}
              readOnly={isLoading}
            />
            {passwordError && <span className="login__input-error">{passwordError}</span>}
          </label>
          
          {isError && <span className="login__error">Что-то пошло не так...</span>}

          <div className="login__wrapper">
            <button
              className={`login__signinButton ${submitAllowed ? 'login__signinButton_active' : ''}`}
              type='submit'
              disabled={!submitAllowed}
            >
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