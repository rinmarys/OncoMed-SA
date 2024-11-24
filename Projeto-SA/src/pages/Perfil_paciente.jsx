import React, { useContext, useEffect, useState } from 'react'
import './Perfil_paciente.css'
import HamburgerMenu from '../components/HamburgerMenu'

function Perfil_paciente() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [genero, setGenero] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setNome(savedProfile.nome || '');

      setEmail(savedProfile.email || '');

      setTelefone(savedProfile.telefone || '');

      setGenero(savedProfile.genero || '');
    }
  }, []);

  const handleChange = (setter) => (event) => setter(event.target.value)

  const editar = () => {
    if (senha !== confirmarSenha) {
      alert("As duas senhas devem ser iguais!")
      return;
    }

    setLoading(true)
    setError('')

    try {
      const userProfile = {
        nome,
        email,
        telefone,
        senha,
        confirmarSenha,
      }
      localStorage.setItem("userProfile", JSON.stringify(userProfile));

      alert("Dados atualizados!")

    } catch (err) {
      console.error(error);
      setError("Falha ao atualizar os dados. tente novamente.");

    } finally {
      setLoading(false);

    }
  }

  const deletar = () => {
    if (window.confirm('Tem certeza que deseja deletar sua conta?'))

      localStorage.removeItem("userProfile")
    alert("Conta deletada!")
    history.push("/home")
  }


  return (
    <div className='user-container'>
      <div className="alinhamento-tituloHamburger">
        <div className='nav_container'>
          <h1>MEU PERFIL</h1>
          <div className="faixa_verde"></div>
        </div>

        <div className="alinhamento-hamburger-perfilPaciente">
          <HamburgerMenu />
        </div>
      </div>

      <div className="container-alinhamento-um">
        <div className='info_container'>

          <div className='posicao_container'>
<<<<<<< HEAD
            <label for="">Nome completo</label>
            <input placeholder="Digite seu nome" value={nome} onChange={handleChange(setNome)} />

            <label for="">Email</label>
            <input type="email" placeholder="Digite seu email" value={email} onChange={handleChange(setEmail)} />

            <label for="">Telefone (com DDD)</label>
            <input placeholder="Digite seu número de telefone" value={telefone} onChange={handleChange(setTelefone)} />
=======
            <label>Nome completo</label>
            <input placeholder="Digite seu nome" value={nome} onChange={handleChange(setNome)}/>

            <label>Email</label>
            <input type="email" placeholder="Digite seu email" value={email} onChange={handleChange(setEmail)}/>

            <label>Telefone (com DDD)</label>
            <input placeholder="Digite seu número de telefone"  value={telefone} onChange={handleChange(setTelefone)}/>

            <label>Senha</label>
            <input type="password" placeholder="Digite a sua senha" value={senha} onChange={handleChange(setSenha)}/>

            <label>Nova senha </label>
            <input type="password" placeholder="Confirme sua nova senha" value={confirmarSenha} onChange={handleChange(setConfirmarSenha)}/>
>>>>>>> 5552daca759801a91ce4d5e3bd0c18fb4d01611c

            <label>Gênero</label>
            <select id="genero" value={genero} onChange={handleChange(setGenero)}>
              <option>Selecione seu genêro</option>
              <option>Feminino</option>
              <option>Masculino</option>
              <option>Prefiro não informar sobre isso</option>
            </select>
          </div>

        </div>

        <div className="container-alinhamento-dois">

          <div className="container_text">
            <div className="alinhamento-inputs-perfis">
              <label for="">Senha</label>
              <input type="password"
                placeholder="Digite a sua senha"
                value={senha}
                onChange={handleChange(setSenha)} />

<<<<<<< HEAD
              <label for="">Nova senha </label>
              <input
                type="password"
                placeholder="Confirme sua nova senha"
                value={confirmarSenha}
                onChange={handleChange(setConfirmarSenha)} />

              <label>Descrição breve</label>
              <textarea name="" id="" placeholder='Escreva algo sobre você...'></textarea>
=======
          <div className='posicao'>
            <div className="container_edit">
             <button onClick={editar} disable={loading}>Editar</button>
            </div>
            <div className="container_delete">
             <button onClick={deletar}>Deletar</button>
>>>>>>> 5552daca759801a91ce4d5e3bd0c18fb4d01611c
            </div>
          </div>
        </div>

        <div className="container-alinhamento-tres">
          <div className="container-foto-usuario">
            <label>Escolha sua foto de perfil</label>
            <img src="icon_user.png" alt="foto de usuario" />
          </div>

          <div className="alinhamento-buttons-perfis">
            <button className='button-editar-perfis' onClick={editar} disable={loading}>EDITAR</button>

            <button className='button-deletar-perfis' onClick={deletar}>DELETAR</button>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Perfil_paciente