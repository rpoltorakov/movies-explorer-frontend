import './NotFound.css'
import React from 'react'
import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <main className='notFound'>
      <h2 className="notFound__title">
        404
      </h2>

      <p className="notFound__subtitle">
        Страница не найдена
      </p>

      <p className="notFound__button" onClick={goBack}>
        Назад
      </p>
    </main>
  );
}

export default NotFound;