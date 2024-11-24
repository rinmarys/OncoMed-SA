import React from 'react'
import './Perfil_medico.css'


function Perfil_medico() {
  return (
    <div className='user_container_doctor'>
    
    <div className='info_container'>
      <div className='name_user'>
      </div>
       <label for="">Nome completo</label><input placeholder="Digite seu nome"/>
       <label for="">Email</label><input type="email" placeholder="Digite seu email"/>
       <label for="">Telefone (com DDD)</label><input placeholder="Digite seu número de telefone"/>
       <label for="">Senha</label><input type="password" placeholder="Digite uma senha"/>
       <label for="">Gênero</label>
       <select>
       <option value="">Selecione seu Gênero</option>
       <option value="">Masculino</option>
       <option value="">Feminino</option>
       <option value="">Prefiro não informar</option>
       </select>
      </div>
    
      <div className="container_text">
        <input type="text" id="placeholder_text" placeholder="Escreva algo sobre você..."/>
     </div>

      <div clasName="posicao_container">
        <div class="container_edit">
        <button>Editar</button>
        </div>
        <div class="container_delete">
        <button>Deletar</button>
        </div>
      </div>
    </div>
  )
}

export default Perfil_medico
