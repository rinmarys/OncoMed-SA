import React, { useState } from 'react'
import './Perfil_paciente.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext';

function Perfil_paciente() {
  function editar(){
  const[nomeEditado, setNomeEditado]=useState('')
  const[emailEditado, setEmailEditado]= useState('')
  const[telefoneEditado, setTelefoneEditado]=useState('')
  const[senhaEditada, setSenhaEditada]=useState('')
  const[generoEditado, setGeneroEditado]=useState('')
  }

  function deletar(){
  }

  return (
    <div className='user_container'>
       <div className='nav_container'>
      <img src="./Imgs/logo_oncoMed.png" alt=""/>
      <h1>Perfil paciente</h1>
      <div className="faixa_verde"></div>
        </div>
      <div className='info_container'>
      <img src="./Imgs/avatar_female.png"></img>
      <div className='name_user'>
      <p>Aaaa</p>
      </div>
       <label for="">Nome completo</label>
       <input placeholder="Digite seu nome"/>
       <label for="">Email</label>
       <input type="email" placeholder="Digite seu email"/>
       <label for="">Telefone (com DDD)</label>
       <input placeholder="Digite seu número de telefone"/>
       <label for="">Senha</label>
       <input type="password" placeholder="Digite uma senha"/>
       <label for="">Gênero</label>
       <input type='text' placeholder='Digite seu gênero'></input>
      </div>
    
      <div className="container_text">
        <input type="text" id="placeholder_text" placeholder="Escreva algo sobre você..."/>
     </div>

      <div clasName="posicao_container">
        <div class="container_edit">
        <button onClick={editar}>Editar</button>
        </div>
        <div class="container_delete">
        <button onClick={deletar}>Deletar</button>
        </div>
      </div>

    </div>

  )
}

export default Perfil_paciente
