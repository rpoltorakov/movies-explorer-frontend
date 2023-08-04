import './Portfolio.css'
import React from 'react'

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>

      <nav className='portfolio__links'>
        <a className='portfolio__link portfolio__link_underlined' href='https://rpoltorakov.github.io/how-to-learn/'>Статичный сайт</a>
        <a className='portfolio__link portfolio__link_underlined' href='https://rpoltorakov.github.io/russian-travel/'>Адаптивный сайт</a>
        <a className='portfolio__link' href='https://rpoltorakov.github.io/mesto-react/'>Одностраничное приложение</a>
      </nav>
    </section>
  );
}

export default Portfolio;