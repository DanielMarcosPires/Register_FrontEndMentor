import React from 'react'

import {GiConfirmed} from 'react-icons/gi'
import {useLocation} from "react-router-dom"
export default function RegisterEnviado() {
  const location = useLocation();

  // Verifica se a página foi acessada diretamente ou redirecionada do formulário
  const mensagem = location.state?.mensagem || 'O formulário foi enviado com sucesso!';
  return (
    <div className='centro'>
        <GiConfirmed size={80} />
        <h2>{mensagem}!</h2>
    </div>
  )
}
