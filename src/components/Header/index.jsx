import React from 'react'
import logo from './img/logo.svg'
import style from './scss/style.module.scss'
import { Link } from 'react-router-dom'
export default function Header() {
  const textAlt = "Huddle logo"
  return (
    <header className={style.cabecalho}>
        <div className={style.margem}>
          <Link to={'/'}>
            <img srcSet={logo} alt={textAlt.toString()} />
          </Link>
        </div>
    </header>
  )
}
