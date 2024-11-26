import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import './Perfil_paciente.css';
import HamburgerMenu from '../components/HamburgerMenu';

function Perfil_paciente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cep, setCep] = useState('');
  const [genero, setGenero] = useState('');
  const [descricao, setDescricao] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editando, setEditando] = useState(false); 
  const userId=''

  const [mostrarPopDeletarPerfil,setMostrarPopDeletarPerfil]=useState(false)
  const [mostrarPopUpSalvoPerfil,setMostrarPopUpSalvoPerfil]=useState(false)

  const [mostrarSenha, setMostrarSenha]= useState (false)
  const [mostrarConfirmarSenha]=useState (false)

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
 }, [userId])

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
        cep,
        genero,
        descricao
      }
      await axios.put(`http://localhost:5173/perfil_paciente/${userId}`,pacientePerfil)

      console.log ("Dados salvos com sucesso!")
     //Mostrar pop-up salvo com sucesso
     setMostrarPopUpSalvoPerfil(true)
     setEditando(true)
    } catch (err) {
      console.error(err);
      setError('Falha ao atualizar os dados. Tente novamente.');

    } finally {
      setLoading(false);
    }
  };

  //Função para abir o pop-up de deletar
  const abrirPopDeletarPerfil=() => {
    setMostrarPopDeletarPerfil(true)
  }

  //Função para não deletar perfil
  const naoDeletarPerfilPaciente=() =>{
    setMostrarPopDeletarPerfil(false)
  }

  const deletarPerfilPaciente = async () => {
      try{
      await axios.delete(`http://localhost:5173/perfil_paciente/${userId}`)
      alert('Conta deletada!');
      navigate('/home')
      }catch (err){
      console.error(err)
      alert('Falha ao deletar a conta. Tente novamente')
    }
  };

  //função para fechar o pop up salvo com sucesso
  const fecharPopUpSalvoPerfil=() => {
    setMostrarPopUpSalvoPerfil(false)
  }

  return (
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
            <div style={{position:'relative'}}></div>
            <input
              type={mostrarSenha ? "text":"password"}
              placeholder="Digite a sua senha"
              value={senha}
              onChange={handleChange(setSenha)}
              disabled={!editando}
              minlenght={7}
              maxLength={12}
            />
            <button type='button' onClick={() => setMostrarSenha(!mostrarSenha)}
            style={{position:'absolute', right:'10px', top:'50%', transform:'translateY(-50%)', border:'none', background:'none', cursor:'pointer'}}>
            {mostrarSenha ?(
            <img src='input_olho_aberto.png' alt='Olhinho aberto'/>
            ) : (
              <img src='input_olho_fechado.png' alt='olhinho fechado'/>
            )}
            </button>

            <label>Nova senha</label>
            <input
             type={mostrarSenha ? "text":"password"}
             placeholder="Digite a sua senha"
             value={senha}
             onChange={handleChange(setSenha)}
             disabled={!editando}
             minlenght={7}
             maxLength={12}
            />
            <button type='button' onClick={() => setMostrarSenha(!mostrarSenha)}
            style={{position:'absolute', left:'900px', top:'15%', width:'80px', height:'80px', border:'none', background:'none', cursor:'pointer'}}>
            {mostrarSenha ?(
            <img src='input_olho_aberto.png' alt='Olhinho aberto'
            className='icone-olihinho-aberto'/>
            
            ) : (
              <img src='input_olho_fechado.png' alt='olhinho fechado'
              className='icone-olhinho-fechado'/>
            )}
            </button>

            <label>Descrição breve</label>
            <textarea
              placeholder='Escreva algo sobre você...'
              value={descricao}
              onChange={handleChange(setDescricao)}
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

              {/* botão para abrir o pop-up de deletar */}
              <button
                className='button-deletar-perfis'
                onClick={abrirPopDeletarPerfil}
                disabled= {loading}
              >DELETAR
              </button>
            </div>
          </div>
        </div>
         {/* Pop up deletar perfil paciente */}
         {mostrarPopDeletarPerfil && (
                        <div className='Container-PopPerfilPaciente'>
                            <h2 className='FontePopPerfilPaciente'>Deseja mesmo deletar sua conta?</h2>
                            <div className='ButtonsPopPerfilPaciente'>
                                <button className='buttonNaoDeletarPerfilPaciente' onClick={naoDeletarPerfilPaciente}>NÃO</button>
                                <button className='buttonDeletarPerfilPaciente' onClick={deletarPerfilPaciente}>SIM</button>
                            </div>
                        </div>
                    )}

                    {/* pop up salvar perfil paciente */}
                    {mostrarPopUpSalvoPerfil &&(
                    <div className='container-PopSalvarPerfilPaciente'>
                      <h2 className='FontepPopSalvarPerfilPaciente'>Salvo com sucesso!</h2>
                      <div className='buttonPopSalvarPerfilPaciente'>
                        <button className='buttonOkPerfilPaciente' onClick={fecharPopUpSalvoPerfil}>OK</button>
                        </div>
                        </div>
                    )}
      </div>
    </div>
  );
}

export default Perfil_paciente;
