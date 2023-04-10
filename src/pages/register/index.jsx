import React from 'react'
import style from './scss/style.module.scss'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const navegar = useNavigate()
    const confirmar = (e) =>{
        
    }

    return (
        <>
             <form onSubmit={(e)=>{
                e.preventDefault()
                navegar("enviado")
             }} className={style.form}>
                <div className={style.form__border}>
                    <label className={style.form__label} htmlFor='name'>Name:</label>
                    <input type="text" id='name' placeholder='Name:' />
                </div>
                <ul className={style.form__border}>
                    <label className={style.form__label} htmlFor='email'>Email:</label>
                    <input type="email" id='email' placeholder='Email' required />
                </ul>
                <div className={style.form__border}>
                    <label className={style.form__label} htmlFor='password'>Password:</label>
                    <input type="password" id='password' placeholder='Password' required />
                </div>
                <input className={style.form__button} type="submit" value="Send" />
             </form>
        </>
  )
}
