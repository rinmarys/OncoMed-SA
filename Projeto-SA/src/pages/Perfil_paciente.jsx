
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import axios from 'axios';
import './Perfil_paciente.css';
import ConfirmarDeletarPopUp from '../components/ConfirmarDeletarPopUp';
import ConfirmarSalvoPopUp from '../components/ConfirmarSalvoPopUp';
import { useNavigate } from 'react-router-dom';
import HamburgerMenu from '../components/HamburgerMenuAdmin';


function PerfilPaciente() {


  const { usuario_logado, set_usuario_logado } = useContext(GlobalContext)
  const [nome, setNome] = useState(usuario_logado.nome || '')
  const [email, setEmail] = useState(usuario_logado.email || '')
  const [telefone, setTelefone] = useState(usuario_logado.telefone || '')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [cep, setCep] = useState(usuario_logado.cep || '')
  const [descricao, setDescricao] = useState('')

  const [editando, setEditando] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const [mostrarPopDeletarPerfil, setMostrarPopDeletarPerfil] = useState(false)
  const [mostrarPopSalvoPerfil, setMostrarPopDSalvoPerfil] = useState(false)

  const [estado_do_olhinho_senha, set_estado_olinho_senha] = useState(false)
  const [estado_do_olinho_confirmar_senha, set_estado_do_olhinho_confirmar_senha] = useState(false)

  const toggleSenhaVisivel = () => {
    set_estado_olinho_senha(!estado_do_olhinho_senha)
  }

  const toggleConfirmarSenhaVisivel = () => {
    set_estado_do_olhinho_confirmar_senha(!estado_do_olinho_confirmar_senha)
  }

  useEffect(() => {
    if (!userId) return;

    const fetchUsuarioPaciente = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/perfil_paciente/${usuario_logado.id_paciente}`);
        const { nome, email, telefone, cep, descricao } = response.data;

        set_usuario_logado(prev => ({ ...prev, nome, email, telefone, cep, descricao }))

        setNome(nome)
        setEmail(email)
        setTelefone(telefone)
        setCep(cep)
        setDescricao(descricao)
      } catch (err) {
        console.error(err)
        setError('erro ao carregar os dados do usuário')
      }
    };

    fetchUsuarioPaciente();
  }, [usuario_logado.id_paciente, set_usuario_logado]);

  const handleChange = (setter) => (event) => setter(event.target.value);

  const editar = async () => {
    if (!editando) {
      setEditando(true);
      return;
    }

    if (senha && senha !== confirmarSenha) {
      alert('As duas senhas devem ser iguais!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const pacientePerfil = { nome, email, telefone, cep, descricao, senha };
      await axios.put(`http://localhost:5173/perfil_paciente/${usuario_logado.id_paciente}`, pacientePerfil);

      set_usuario_logado(prev => ({ ...prev, nome, email, telefone, cep, descricao }))

      setMostrarPopSalvoPerfil(true);
      setEditando(false);
    } catch (err) {
      console.error(err);
      setError('Falha ao atualizar os dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
    setMostrarPopDSalvoPerfil(true)
  };

  const confirmarDeletarConta = () => {
    setMostrarPopDeletarPerfil(true);
  };

  const deletarConta = async () => {
    try {
      await axios.delete(`http://localhost:5173/perfil_paciente/${userId}`);
      window.location.href = '/home';
    } catch (err) {
      console.error(err);
      alert('Falha ao deletar a conta. Tente novamente.');
    }
  };

  const handleConfirmarDeletar = () => {
    deletarConta();
    setMostrarPopDeletarPerfil(false);
  };

  const handleCancelarDeletar = () => {
    setMostrarPopDeletarPerfil(false);
  };



  return (
    <div className="user-container">
      <div className="alinhamento-tituloHamburger">
        <div className="nav_container">
          <h1>MEU PERFIL - PACIENTE</h1>
          <div className="faixa_verde"></div>
        </div>
        <div className="alinhamento-hamburger-perfilPaciente">
          <HamburgerMenu />
        </div>
      </div>

      <div className="container-alinhamento-um-perfil">
        <div className="info_container">
          <div className="posicao_container">
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
              type="text"
              placeholder="Digite seu número de telefone"
              value={telefone}
              onChange={handleChange(setTelefone)}
              disabled={!editando}
            />

            <label>CEP</label>
            <input
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={handleChange(setCep)}
              disabled={!editando}
            />
          </div>
        </div>

        <div className="container-alinhamento-dois-perfil">
          <div className="alinhamento-inputs-perfis">
            <label>Senha</label>
            <input
              type={estado_do_olhinho_senha ? 'text' : 'password'}
              placeholder="Digite sua nova senha"
              value={senha}
              onChange={handleChange(setSenha)}
              disabled={!editando}
            />
            <img
              src={estado_do_olhinho_senha ? 'input_olho_aberto.png' : 'input_olho_fechado.png'}
              alt='olhinhoUm'
              onClick={toggleSenhaVisivel}
              style={{ cursor: 'pointer', width: '30px', height: '30px', marginLeft: '278px', position: 'absolute', top: '233px' }} />

            <label>Confirmar Senha</label>
            <input
              type={estado_do_olinho_confirmar_senha ? 'text' : 'password'}
              placeholder="Confirme sua nova senha"
              value={confirmarSenha}
              onChange={handleChange(setConfirmarSenha)}
              disabled={!editando}
            />
            <img
              src={estado_do_olinho_confirmar_senha ? 'input_olho_aberto.png' : 'input_olho_fechado.png'}
              alt='olhinhoDois'
              onClick={toggleConfirmarSenhaVisivel}
              style={{ cursor: 'pointer', width: '30px', height: '30px', marginLeft: '278px', position: 'absolute', top: '350px' }}
            />

            <label>Descrição breve</label>
            <textarea
              placeholder="Escreva algo sobre você..."
              value={descricao}
              onChange={handleChange(setDescricao)}
              disabled={!editando}
              className="textArea-perfis"
            ></textarea>
          </div >
        </div >

        <div className="container-alinhamento-tres-perfil">
          <div className="container-foto-usuario">
            <label>Escolha sua foto de perfil</label>
            <img src="icon_user.png" alt="foto de usuario" />
          </div>

          <div className="alinhamento-buttons-perfis">
            <button className="button-editar-perfis" onClick={editar} disabled={loading}>
              {editando ? 'SALVAR' : 'EDITAR'}
            </button>
            <button className="button-deletar-perfis" onClick={confirmarDeletarConta} disabled={loading}>
              DELETAR
            </button>
          </div>
        </div>
      </div >

      {mostrarPopSalvoPerfil && (
        <div className="container-PopSalvarPerfilPaciente">
          <h2 className="FontePopPerfilPacienteSalvo">Salvo com sucesso!</h2>
          <button className="buttonOkPerfilPaciente" onClick={() => setMostrarPopSalvoPerfil(false)}>OK</button>
        </div>
      )
      }
      {
        mostrarPopDeletarPerfil && (
          <div className="Container-PopPerfilPaciente">
            <h3 className="FontePopPerfilPaciente">Tem certeza que deseja deletar a sua conta?</h3>
            <div className="ButtonsPopPerfilPaciente">
              <button className="buttonDeletarPerfilPaciente" onClick={handleConfirmarDeletar}>SIM</button>
              <button className="buttonNaoDeletarPerfilPaciente" onClick={handleCancelarDeletar}>NÃO</button>
            </div>
          </div>
        )
      }
    </div >
  );
}

export default PerfilPaciente;
