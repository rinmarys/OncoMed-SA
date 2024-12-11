import React from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import './Pop_up_de_boas_vindas.css'
import { useEffect } from 'react';

function Pop_up_de_boas_vindas() {
  
  const {usuario_logado} = useContext(GlobalContext);
  const {set_tempo_do_pop_up_de_boas_vindas} = useContext(GlobalContext);

  return (
    <div className='Pop_up_de_boas_vindas_container'>
      

      <div className='Pop_up_de_boas_vindas_container_alinhamento_conteudo'>
        <div>

        <h1>Seja bem-vindo(a)!</h1>
        <p className='nome-pessoa-boasvindas' >{ usuario_logado == [] ? `Favor fazer o login` : usuario_logado.nome}</p>
        </div>
        <img className='imagem_jade_boas-vindas' src="jade_felizinha.png" alt="" />
        <button onClick={() => set_tempo_do_pop_up_de_boas_vindas(false)}>X</button>
      </div>
      
    </div>
    
  )
}

export default Pop_up_de_boas_vindas
