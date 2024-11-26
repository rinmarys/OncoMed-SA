import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Perfil_medico.css'
import HamburgerMenu from '../components/HamburgerMenu'

function Perfil_medico() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cep, setCep] = useState('');
  const [genero, setGenero] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editando, setEditando] = useState(false); 
  const userId=''

 useEffect(() => {
  const fetchUsuarioPaciente= async() =>{
    try{
      const response= await axios.get(`http://localhost:5173/perfil_paciente/${userId}`)
      const {nome, email, telefone}=response.data
      setNome(nome)
      setEmail(email)
      setTelefone(telefone)
    }catch (err){
     console.error(err)
     setError('Erro ao carregar os dados do usuário')
    }
  }
  fetchUsuarioPaciente()
 }, [])

  const handleChange = (setter) => (event) => setter(event.target.value);

  const editar = async () => {
    if (!editando) {
      setEditando(true); 
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As duas senhas devem ser iguais!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const pacientePerfil = {
        nome,
        email,
        telefone,
        senha,
        confirmarSenha,
      }
      await axios.put(`http://localhost:5173/perfil_paciente/${userId}`,pacientePerfil)

      alert('Dados atualizados!');
      setEditando(false); 

    } catch (err) {
      console.error(error);
      setError('Falha ao atualizar os dados. Tente novamente.');

    } finally {
      setLoading(false);
    }
  };

  const deletar = async () => {
    if (window.confirm('Tem certeza que deseja deletar sua conta?')) {
      try{
      await axios.delete(`http://localhost:5173/perfil_paciente/${userId}`)
      alert('Conta deletada!');
      window.location.href = '/home';
      }catch (err){
      console.error(err)
      alert('Falha ao deletar a conta. Tente novamnete')
    }
    }
  };

  return (
    <div>
     <div className='user-container'>
      <div className="alinhamento-tituloHamburger">
        <div className='nav_container'>
          <h1>MEU PERFIL - PACIENTE</h1>
          <div className="faixa_verde"></div>
        </div>

        <div className="alinhamento-hamburger-perfilPaciente">
          <HamburgerMenu />
        </div>
      </div>

      <div className="container-alinhamento-um">
        <div className='info_container'>

          <div className='posicao_container'>

            <label>Nome completo</label>
            <input
              placeholder="Digite seu nome"
              value={nome}
              onChange={handleChange(setNome)}
              disabled={!editando} 
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleChange(setEmail)}
              disabled={!editando}
            />

            <label>Telefone (com DDD)</label>
            <input
              type='text'
              placeholder="Digite seu número de telefone"
              value={telefone}
              onChange={handleChange(setTelefone)}
              disabled={!editando}
            />

            <label>CEP</label>
            <input
              type="text"
              placeholder='Digite seu CEP'
              value={cep}
              onChange={handleChange(setCep)}
              disabled={!editando}
            />

            <label>Gênero</label>
            <select value={genero} 
            onChange={handleChange(setGenero)}
            disabled={!editando}>
            <option>Selecione seu genêro</option>
            <option>Feminino</option>
            <option>Masculino</option>
            <option>Prefiro não informar sobre isso</option>
            </select> 
          </div>

        </div>

        <div className="container-alinhamento-dois">
          <div className="alinhamento-inputs-perfis">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite a sua senha"
              value={senha}
              onChange={handleChange(setSenha)}
              disabled={!editando}
            />

            <label>Nova senha</label>
            <input
              type="password"
              placeholder="Confirme sua nova senha"
              value={confirmarSenha}
              onChange={handleChange(setConfirmarSenha)}
              disabled={!editando}
            />

            <label>Descrição breve</label>
            <textarea
              placeholder='Escreva algo sobre você...'
              className='textArea-perfis'
              disabled={!editando}
            ></textarea>
          </div>

          <div className="container-alinhamento-tres">
            <div className="container-foto-usuario">
              <label>Escolha sua foto de perfil</label>
              <img src="icon_user.png" alt="foto de usuario" />
            </div>

            <div className="alinhamento-buttons-perfis">
              <button
                className='button-editar-perfis'
                onClick={editar}
                disabled={loading}
              >
                {editando ? 'SALVAR' : 'EDITAR'}
              </button>

              <button
                className='button-deletar-perfis'
                onClick={deletar}
              >DELETAR
              </button>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Perfil_medico