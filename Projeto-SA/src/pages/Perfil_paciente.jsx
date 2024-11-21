import React, { useContext, useEffect, useState } from 'react'
import './Perfil_paciente.css'
import Footer from '../components/Footer'
import HamburgerMenu from '../components/HamburgerMenu'

function Perfil_paciente() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [genero, setGenero] = useState ('')
  const [loading, setLoading]= useState(false)
  const [error, setError]= useState('')

  useEffect(() => {
  const savedProfile= JSON.parse(localStorage.getItem('userProfile'));
  if (savedProfile){
    setNome(savedProfile.nome || '');
 
    setEmail(savedProfile.email || '');

    setTelefone(savedProfile.telefone || '');

    setGenero(savedProfile.genero || '');
  }
  }, []);

 const handleChange=(setter) => (event) => setter (event.target.value)

  const editar=() => {
    if (senha !== confirmarSenha){
      alert ("As duas senhas devem ser iguais!")
      return;
    }
    
    setLoading(true)
    setError('')
  
    try{
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

    const deletar= () => {
     if(window.confirm('Tem certeza que deseja deletar sua conta?'))

     localStorage.removeItem("userProfile")
     alert ("Conta deletada!")
     history.push("/home")
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
            <input placeholder="Digite seu nome" value={nome} onChange={handleChange(setNome)}/>

            <label for="">Email</label>
            <input type="email" placeholder="Digite seu email" value={email} onChange={handleChange(setEmail)}/>

            <label for="">Telefone (com DDD)</label>
            <input placeholder="Digite seu número de telefone"  value={telefone} onChange={handleChange(setTelefone)}/>

            <label for="">Senha</label>
            <input type="password" placeholder="Digite a sua senha" value={senha} onChange={handleChange(setSenha)}/>

            <label for="">Nova senha </label>
            <input type="password" placeholder="Confirme sua nova senha" value={confirmarSenha} onChange={handleChange(setConfirmarSenha)}/>

            <label for="">Gênero</label>
            <select id="genero" value={genero} onChange={handleChange(setGenero)}>
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

          <div className='posicao'>
            <div class="container_edit">
             <button onClick={editar} disable={loading}>Editar</button>
            </div>
            <div class="container_delete">
             <button onClick={deletar}>Deletar</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


export default Perfil_paciente
