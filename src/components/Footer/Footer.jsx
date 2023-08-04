import './Footer.css'
import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>

      <div className='footer__wrapper'>
        <p className='footer__copyright'>&copy; 2023</p>

        <nav className='footer__links'>
          <a href='https://practicum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
          <a href='https://github.com/rpoltorakov/movies-explorer-frontend' className='footer__link'>Github</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;