import React from 'react'
import style from './scss/style.module.scss'


import imagem from './img/illustration-mockups.svg'

import { Link } from 'react-router-dom'
import {GrFacebookOption,GrTwitter} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'

export default function Home() {
  const altText = "Este site se adapta em qualquer dispositivo"
  const tamanho = 40;
  return (
    <article className={style.artigo}>
        <section className={style.section}>
           <img className={style.section__imagem} src={imagem} alt={altText.toString()}/>
        </section>
        <section className={style.section}>
          <div className={style.section__div}>
            <h1 className={style.section_title}>Build The Community Your Fans Will Love</h1>
            <p className={style.section_text}>
              Huddle re-imagines the way build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <Link className={style.section_link} to={"/register"}>Register</Link>
          </div>
          <div className={style.section__social}>
            <GrFacebookOption className={style.section__social__icon} size={tamanho} />
            <GrTwitter className={style.section__social__icon} size={tamanho} />
            <AiOutlineInstagram className={style.section__social__icon} size={tamanho} />
          </div>
        </section>
    </article>
  )
}
