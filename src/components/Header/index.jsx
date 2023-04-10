import React from 'react'
import logo from './img/logo.svg'
import style from './scss/style.module.scss'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className={style.cabecalho}>
        <div className={style.margem}>
          <Link to={'/'}>
            <img srcSet={logo} alt="Huddle logo" />
          </Link>
        </div>
    </header>
  )
}
