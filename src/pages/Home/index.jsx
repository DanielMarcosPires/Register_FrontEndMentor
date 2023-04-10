import React from 'react'
import style from './scss/style.module.scss'


import imagem from './img/illustration-mockups.svg'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <article className={style.artigo}>
        <section className={style.section}>
           <img className={style.section__imagem} src={imagem} alt/>
        </section>
        <section className={style.section}>
          <h1 className={style.section_title}>Build The Community Your Fans Will Love</h1>
          <p className={style.section_text}>
            Huddle re-imagines the way build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
          </p>
          <Link className={style.section_link} to={"/register"}>Register</Link>
        </section>
    </article>
  )
}
