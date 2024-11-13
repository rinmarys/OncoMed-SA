import React, { useContext, useState } from 'react'
import './Perfil_paciente.css'
<<<<<<< HEAD
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
=======
import HamburgerMenu from '../components/HamburgerMenu'

function Perfil_paciente() {
  // Oi anaa, eu fiz isso para funcionar no meu computador e poder adaptar a sua tela
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [telefone, setTelefone] = useState()
  const [senha, setSenha] = useState()

  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: ''
  })



  function editar() {
    const [isEditado, setIsEditado] = useState(false)
    const [novoNome, setNovoNome] = useState(usuario.nome)
    const [novoEmail, setNovoEmail] = useState(usuario.email)
    const [novoTelefone, setTelfone] = useState(usuario.telefone)
    const [novaSenha, setNovaSenha] = useState(usuario.senha)

    const editarPerfil = () => {
      setUsuario({
        nome: novoNome,
        email: novoEmail,
        telefone: novoTelefone,
        senha: novaSenha
      })
      setIsEditado(false)
    }

  }



  function deletar() {

>>>>>>> 29f3de62fc194b6a972b2f9593409922e74d61d2
  }
  
  return (
<<<<<<< HEAD
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
=======
    <div className='user-container'>

      <div className="alinhamento-tituloHamburger">
        <div className='nav_container'>
          <h1>PERFIL PACIENTE</h1>
          <div className="faixa_verde"></div>
        </div>
>>>>>>> 29f3de62fc194b6a972b2f9593409922e74d61d2

        <div className="alinhamento-hamburger-perfilPaciente">
          <HamburgerMenu />
        </div>
      </div>

      <div className="container-alinhamento-um">
        <div className='info_container'>

          <div className='posicao_container'>
            <label for="">Nome completo</label>
            <input placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

            <label for="">Email</label>
            <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label for="">Telefone (com DDD)</label>
            <input placeholder="Digite seu número de telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />

            <label for="">Senha</label>
            <input type="password" placeholder="Digite a sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

            <label for="">Nova senha </label>
            <input type="password" placeholder="Confirme sua nova senha" />

            <label for="">Gênero</label>
            <select name="" id="">
              <option>Selecione seu genêro</option>
              <option>Feminino</option>
              <option>Masculino</option>
              <option>Prefiro não informar sobre isso</option>
            </select>
          </div>

        </div>

        <div className="container-alinhamento-dois">
          <div className='estilizacao_icon'>
            <img src="./public/icon_user.png"></img>
          </div>

          <div className="container_text">
            <textarea name="" id="" placeholder='Escreva algo sobre você...'></textarea>
          </div>

          <div class="container_edit">
            <button onClick={editar}>Editar</button>
          </div>

          <div class="container_delete">
            <button onClick={deletar}>Deletar</button>
          </div>
        </div>
      </div>

    </div>
  )

}


export default Perfil_paciente
