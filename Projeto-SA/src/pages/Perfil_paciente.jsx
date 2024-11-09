import React, { useContext, useState } from 'react'
import './Perfil_paciente.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GlobalContext } from '../contexts/GlobalContext';

function Perfil_paciente() {
const[usuario, setUsuario]=useState({
  nome:'',
  email:'',
  telefone:'',
  senha:''
})



  function editar(){
    const [isEditado, setIsEditado]= useState(false)
    const  [novoNome, setNovoNome]=useState(usuario.nome)
    const  [novoEmail, setNovoEmail]=useState(usuario.email)
    const  [novoTelefone, setTelfone]=useState(usuario.telefone)
    const  [novaSenha, setNovaSenha]=useState(usuario.senha)

    const editrPerfil= () => {
      setUsuario({
        nome:novoNome,
        email:novoEmail,
        telefone: novoTelefone,
        senha:novaSenha
      })
      setIsEditado(false)
    }

  }

  

  function deletar(){

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
       <input placeholder="Digite seu nome" value={nome}onChange={(e) => setNome(e.target.value)}required/>
       <label for="">Email</label>
       <input type="email" placeholder="Digite seu email"value={email}onChange={(e) => setEmail(e.target.value)}required/>
       <label for="">Telefone (com DDD)</label>
       <input placeholder="Digite seu número de telefone" value={telefone}onChange={(e) => setTelefone(e.target.value)}required/>
       <label for="">Senha</label>
       <input type="password" placeholder="Digite a sua senha"value={senha}onChange={(e) => setSenha(e.target.value)}required/>
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
