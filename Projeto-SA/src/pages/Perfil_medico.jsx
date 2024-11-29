import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Perfil_medico.css'
import HamburgerMenu from '../components/HamburgerMenu'

function Perfil_medico() {
  const [nomeMedico, setNomeMedico] = useState('');
  const [emailMedico, setEmailMedico] = useState('');
  const [telefoneMedico, setTelefoneMedico] = useState('');
  const [senhaMedico, setSenhaMedico] = useState('');
  const [confirmarSenhaMedico, setConfirmarSenhaMedico] = useState('');
  const [cepMedico, setCepMedico] = useState('');
  const [descricaoMedico, setDescricaoMedico] = useState('');
  const [editandoMedico, setEditandoMedico] = useState(false);
  const [loadingMedico, setLoadingMedico] = useState(false);
  const [errorMed, setErrorMed] = useState('');
  const [mostrarSenhaMedico, setMostrarSenhaMedico] = useState(false);
  const [mostrarPopDeletarMedico, setMostrarPopDeletarPerfilMedico] = useState(false);
  const [mostrarPopUpSalvoMedico, setMostrarPopUpSalvoPerfilMedico] = useState(false);

  const userId= localStorage.getItem('userId')

 
  useEffect(() => {
    const fetchUsuarioMedico = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/perfil_paciente/${userId}`);
        const { nomeMedico, emailMedico, telefoneMedico, cepMedico,
           descricaoMedico } = response.data;
        setNomeMedico(nomeMedico);
        setEmail(emailMedico);
        setTelefoneMedico(telefoneMedico);
        setCepMedico(cepMedico);
        setDescricaoMedico(descricaoMedico);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar os dados do usuário');
      }
    };

    fetchUsuarioMedico();
  }, [userId]);

  const handleChange = (setter) => (event) => setter(event.target.value);

  const editar = async () => {
    if (!editando) {
      setEditando(false);
      return;
    }

    if (senhaMedico !== confirmarSenhaMedico) {
      alert('As duas senhas devem ser iguais!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const medicoPerfil = { nome, email, telefone, cep, descricao, senha };
      await axios.put(`http://localhost:5173/perfil_paciente/${userId}`, pacientePerfil);

      setMostrarPopUpSalvoPerfil(true);
      setEditando(false);

    } catch (err) {
      console.error(err);
      setError('Falha ao atualizar os dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const confirmarDeletarContaMedico=() =>{
    setMostrarPopDeletarPerfilMedico(true)
  }

  const deletarContaMedico = async () => {
      try {
        await axios.delete(`http://localhost:5173/perfil_paciente/${userId}`);
        window.location.href = '/home';
      } catch (err) {
        console.error(err);
        alert('Falha ao deletar a conta. Tente novamente.');
    }
  };

  const handleConfirmarDeletarMedico=() => {
    deletarContaMedico()
    setMostrarPopDeletarMedico(false)
  }
    const handleCancelarDelatarMedico=() =>{
    setMostrarPopDeletarMedico(false)
    }

    const fecharPopUpSalvoMedico= () =>{
    setMostrarPopUpSalvoMedico(false)
    }


  return (
    <div>
     <div className="alinhamento-tituloHamburger">
        <div className="nav_container">
          <h1>MEU PERFIL - PACIENTE</h1>
          <div className="faixa_verde"></div>
        </div>
        <div className="alinhamento-hamburger-perfilPaciente">
          <HamburgeMenu />
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
              value={emailMedico}
              onChange={handleChange(setEmail)}
              disabled={!editandoMedico}
            />

            <label>Telefone (com DDD)</label>
            <input
              type="text"
              placeholder="Digite seu número de telefone"
              value={telefoneMedico}
              onChange={handleChange(setTelefone)}
              disabled={!editandoMedico}
            />

            <label>CEP</label>
            <input
              type="text"
              placeholder="Digite seu CEP"
              value={cepMedico}
              onChange={handleChange(setCepMedico)}
              disabled={!editandoMedico}
            />
          </div>
        </div>

        <div className="container-alinhamento-dois-perfil">

          <div className="alinhamento-inputs-perfis">
            <label>Senha</label>
            <input
              type={mostrarSenhaMedico ? 'text' : 'password'}
              placeholder="Digite sua senha"
              value={senhaMedico}
              onChange={handleChange(setSenhaMedico)}
              disabled={!editandoMedico}
            />

            <label>Confirmar Senha</label>
            <input
              type={mostrarSenhaMedico ? 'text' : 'password'}
              placeholder="Confirme sua senha"
              value={confirmarSenhaMedico}
              onChange={handleChange(setConfirmarSenhaMedico)}
              disabled={!editandoMedico}
            />
            <label>Descrição breve</label>
            <textarea
              placeholder="Escreva algo sobre você..."
              value={descricaoMedico}
              onChange={handleChange(setDescricaoMedico)}
              disabled={!editandoMedico}
              className='textArea-perfis'
            ></textarea>
          </div>
        </div>

        <div className="container-alinhamento-tres-perfil">
          <div className="container-foto-usuario">
            <label>Escolha sua foto de perfil</label>
            <img src="icon_user.png" alt="foto de usuario" />
          </div>

          <div className="alinhamento-buttons-perfis">
            <button className="button-editar-perfis" onClick={editar} disabled={loadingMedico}>
              {editandoMedico ? 'SALVAR' : 'EDITAR'}
            </button>
            <button className="button-deletar-perfis" onClick={confirmarDeletarContaMedico} disabled={loadingMedico}>
              DELETAR
            </button>
          </div>
        </div>
      </div>
      
      {
        mostrarPopUpSalvoMedico && (
          <div className="container-PopSalvarPerfilPaciente">
            <h2 className='FontePopPerfilPaciente'>Salvo com sucesso!</h2>
            <button className='buttonOkPerfilPaciente' onClick={fecharPopUpSalvoMedico}>OK</button>
          </div>
        )
      }
      
      {
      mostrarPopDeletarPerfil &&(
        <div className='Container-PopPerfilPaciente'>
          <h3 className='FontePopPerfilPaciente'>Tem certeza que deseja deletar a sua conta?</h3>
          <div className='.ButtonsPopPerfilPaciente '>
          <button className='buttonDeletarPerfilPaciente' onClick={handleConfirmarDeletar}>SIM</button>
          <button className='buttonNaoDeletarPerfilPaciente' onClick={handleCancelarDelatar}>NÃO</button>
          </div>
        </div>
      )
    }
    </div>
  );
}

export default Perfil_medico