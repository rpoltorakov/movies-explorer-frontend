import './Promo.css'
import React from 'react'

function Promo() {
  return ( 
    <section className='promo'>
      <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
      <nav className='promo__buttons'>
        <a href='#aboutProject' className='promo__button'>О проекте</a>
        <a href='#techs' className='promo__button'>Технологии</a>
        <a href='#aboutMe' className='promo__button'>Студент</a>
      </nav>
    </section>
  );
}

export default Promo;