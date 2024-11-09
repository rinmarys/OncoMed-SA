import React, { useContext, useState } from 'react'
import './Perfil_paciente.css'
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

  }

  return (
    <div className='user-container'>

      <div className="alinhamento-tituloHamburger">
        <div className='nav_container'>
          <h1>PERFIL PACIENTE</h1>
          <div className="faixa_verde"></div>
        </div>

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
