import React, { useContext, useState } from 'react'
import './Perfil_paciente.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GlobalContext } from '../contexts/GlobalContext';

function Perfil_paciente() {
 const [valor_inpt_nome, set_valor_inpt_nome]=useState('')
 const [valor_inpt_email, set_valor_inpt_email]=useState('')
 const[valor_inpt_telefone, set_valor_inpt_telefone]=useState('')
 const[valor_inpt_genero, set_valor_inpt_genero]=useState('')
 const [valor_inpt_senha, set_valor_inpt_senha]=useState('')
 const[valor_inpt_senha_nova, set_valor_inpt_senha_nova]=useState('')

 const {lista_de_pacientes, set_lista_de_pacientes} = useContext(GlobalContext);
 const {usuario_logado, set_usuario_logado} = useContext(GlobalContext);

  function editar(){
   let pegar_array_pacientes = [...lista_de_pacientes];

    // if(pegar_array_pacientes == null){

    // for(let i = 0; i < pegar_array_pacientes.length; i++){
    
  }

  function deletar(){
    let userLogado = JSON.parse(localStorage.getItem("User Logado"));
    let babasCadastradas = JSON.parse(
      localStorage.getItem("Cuidadores Cadastrados")
    );
  }

  return (
    <div className='user_container'>
      <Header/>
       <div className='nav_container'>
      <h1>PERFIL PACIENTE</h1>
      <div className="faixa_verde"></div>
      </div>
      <div className='info_container'>
      <div className='name_user'>
      <p>Aaaa</p>
      </div>
      <div className='posicao_container'>
       <label for="">Nome completo</label>
       <input placeholder="Digite seu nome" value={valor_inpt_nome} onChange={(e) => set_valor_inpt_nome(e.target.value)}/>
       <label for="">Email</label>
       <input type="email" placeholder="Digite seu email" value={valor_inpt_email} onChange={(e) => set_valor_inpt_email(e.target.value)}/>
       <label for="">Telefone (com DDD)</label>
       <input placeholder="Digite seu número de telefone"/>
       <label for="">Senha</label>
       <input type="password" placeholder="Digite a sua senha"/>
       <label for="">Nova senha </label>
       <input type="password" placeholder="Confirme sua nova senha"/>
       <label for="">Gênero</label>
       <select name="" id="">
       <option>Selecione seu genêro</option>
       <option>Feminino</option>
       <option>Masculino</option>
       <option>Prefiro não informar sobre isso</option>
       </select>
       </div>
      </div>
    
      <div className="container_text">
        <input type="text" id="placeholder_text" placeholder="Escreva algo sobre você..."/>
     </div>

  
      <div class="container_edit">
        <button onClick={editar}>Editar</button>
        </div>
        <div class="container_delete">
        <button onClick={deletar}>Deletar</button>
      </div>
      
      <div className='estilizacao_icon'>
      <img src="./public/icon_user.png"></img>
      </div>
  
    </div>

  )
}

export default Perfil_paciente
