import './AboutProject.css'
import React from 'react'

function AboutProject() {
  return (
    <section className='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>

      <div className='aboutProject__info'>
        <h3 className='aboutProject__subtitle aboutProject__subtitle_left'>Дипломный проект включал 5 этапов</h3>
        <p className='aboutProject__text aboutProject__text_left'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className='aboutProject__subtitle aboutProject__subtitle_right'>На выполнение проекта ушло 5 недель</h3>
        <p className='aboutProject__text aboutProject__text_right'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>

      <div className='aboutProject__progressBars'>
        <p className='aboutProject__progressBar aboutProject__progressBar_leftBar'>1 неделя</p>
        <p className='aboutProject__progressBar aboutProject__progressBar_rightBar'>4 недели</p>
        <p className='aboutProject__progressBar aboutProject__progressBar_leftSubtitle'>Back-end</p>
        {/* aboutProject__progressBarSubtitle */}
        <p className='aboutProject__progressBar aboutProject__progressBar_rightSubtitle'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;