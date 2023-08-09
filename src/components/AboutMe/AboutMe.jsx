import './AboutMe.css'
import React from 'react'
import photo from '../../images/default_avatar.png'

function AboutMe() {
  return (
    <section className='aboutMe' id='aboutMe'>
      <h2 className='aboutMe__title'>Студент</h2>

      <div className='aboutMe__columns'>
        <div className='aboutMe__column'>
          <h3 className='aboutMe__name'>Роман</h3>
          <p className='aboutMe__subtitle'>Фронтенд-разработчик, 25 лет</p>
          <p className='aboutMe__text'>Живу и работаю в Москве. Закончил факультет машиностроительных технологий в МГТУ им. Баумана. С 2021 года работаю в компании «Glowbyte» в практике BI на позиции BI-разработчика. С уходом зарубежных вендоров, начал активно заниматься веб-разработкой.</p>
          <a
            className='aboutMe__link'
            href='https://github.com/rpoltorakov'
            target='blank'
          >Github</a>
        </div>

        <img className='aboutMe__photo' src={photo} alt="Фотография автора" />
      </div>
    </section>
  );
}

export default AboutMe;