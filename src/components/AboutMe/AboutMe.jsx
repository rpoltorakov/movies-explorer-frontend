import './AboutMe.css'
import React from 'react'
import photo from '../../images/default_avatar.png'

function AboutMe() {
  return (
    <section className='aboutMe'>
      <h2 className='aboutMe__title'>Студент</h2>

      <div className='aboutMe__columns'>
        <div className='aboutMe__column'>
          <h3 className='aboutMe__name'>Роман</h3>
          <p className='aboutMe__subtitle'>Фронтенд-разработчик, 25 лет</p>
          <p className='aboutMe__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore nulla pariatur. Excepteur sint occaecat non proident.</p>
          <a className='aboutMe__link' href='#'>Github</a>
        </div>

        <img className='aboutMe__photo' src={photo} alt="Фотография автора" />
      </div>
      
      

    </section>
  );
}

export default AboutMe;