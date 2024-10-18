import React from 'react'
import Nav_perfil from '../components/Nav_perfil'
import './Perfil_paciente.css'

function Perfil_paciente() {
  return (
    <div className='user_container'>
      <Nav_perfil/>
      
      <label for="">Nome completo</label><input placeholder="Digite seu nome"/>
      <label for="">Email</label><input type="email" placeholder="Digite seu email"/>
      <label for="">Telefone (com DD)</label><input placeholder="Digite seu número de telefone"/>
      <label for="">Senha</label><input type="password" placeholder="Digite uma senha"/>
      <label for="">Gênero</label>
      <select>
      <option value="">Selecione seu Gênero</option>
      <option value="">Masculino</option>
      <option value="">Feminino</option>
      <option value="">Prefiro não dizer</option>
      </select>
    
      <div class="container_text">
        <input type="text" id="placeholder_text" placeholder="Escreva algo sbobre você..."/>
     </div>

      <div class="container_edit">
      <button>Editar</button>
      </div>
      <div class="container_delete">
       <button>Deletar</button>
      </div>
   </div>

  )
}

export default Perfil_paciente
