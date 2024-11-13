import React, { useContext, useState } from 'react'
import './Perfil_paciente.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Perfil_paciente() {
const[user, setUser]=useState({
  nome:'',
  email:'',
  telefone:'',
  senha:''
})

  const editar= (e) => {
   e.preventDefault();
     
   localStorage.setItem('user', JSON.stringify(user))
   alert('Dados salvos com sucesso!')
  } 
  
  
  const deletar= () => {
   if(window.confirm('Tem certeza que deseja deletar sua conta?'))
   alert('Perfil deletdo com sucesso!')
  }
  
  return (
    <div className='user_container'>
      <Header/>
      {/* <form onSubmit={handleSave}> */}
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
       <input placeholder="Digite seu nome" value={user.nome}onChange={(e) => setUser({...user, nome:e.target.value})}/>
       <label for="">Email</label>
       <input type="email" placeholder="Digite seu email" value={user.email}onChange={(e) => setUser({...user, email:e.target.value})}/>
       <label for="">Telefone (com DDD)</label>
       <input placeholder="Digite seu número de telefone" value={user.telefone}onChange={(e) => setUser({...user, telefone:e.target.value})}/>
       <label for="">Senha</label>
       <input type="password" placeholder="Digite a sua senha"value={user.nome}onChange={(e) => setUser({...user, senha:e.target.value})}/>
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
        <button onClick={editar} >Editar</button>
        </div>
        <div class="container_delete">
        <button onClick={deletar}>Deletar</button>
      </div>
      {/* </form> */}
      
      <div className='estilizacao_icon'>
      <img src="./public/icon_user.png"></img>
      </div>
  
      <Footer/>
    </div>

  )

}


export default Perfil_paciente
