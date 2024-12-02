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
        const response = await axios.get(`http://localhost:5173/perfil_medico/${userId}`);
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
    if (!editandoMedico) {
      setEditandoMedico(false);
      return;
    }

    if (senhaMedico !== confirmarSenhaMedico) {
      alert('As duas senhas devem ser iguais!');
      return;
    }

    setLoadingMedico(true);
    setErrorMed('');

    try {
      const medicoPerfil = { nome, email, telefone, cep, descricao, senha };
      await axios.put(`http://localhost:5173/perfil_medico/${userId}`, medicoPerfil);

      setMostrarPopUpSalvoPerfilMedico(true);
      setEditandoMedico(false);

    } catch (err) {
      console.error(err);
      setErrorMed('Falha ao atualizar os dados. Tente novamente.');
    } finally {
      setLoadingMedico(false);
    }
  };

  const confirmarDeletarContaMedico=() =>{
    setMostrarPopDeletarPerfilMedico(true)
  }

  const deletarContaMedico = async () => {
      try {
        await axios.delete(`http://localhost:5173/perfil_medico/${userId}`);
        window.location.href = '/home';
      } catch (err) {
        console.error(err);
        alert('Falha ao deletar a conta. Tente novamente.');
    }
  };

  const handleConfirmarDeletarMedico=() => {
    deletarContaMedico()
    setMostrarPopDeletarPerfilMedico(false)
  }
    const handleCancelarDelatarMedico=() =>{
      setMostrarPopDeletarPerfilMedico(false)
    }

    const fecharPopUpSalvoMedico= () =>{
    setMostrarPopDeletarPerfilMedico(false)
    }


  return (
    <div>
     <div className="alinhamento-tituloHamburgerMedico">
        <div className="nav_containerMedico">
          <h1>MEU PERFIL - PACIENTE</h1>
          <div className="faixaVerdeMedico"></div>
        </div>
        <div className="alinhamento-hamburger-perfilMedico">
        <HamburgerMenu/>
        </div>
      </div>

      <div className="container-alinhamento-um-perfilMedico">
        <div className="info_containerMedico">
          <div className="posicao_containerMedico">
            <label>Nome completo</label>
            <input
              placeholder="Digite seu nome"
              value={nomeMedico}
              onChange={handleChange(setNomeMedico)}
              disabled={!editandoMedico}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={emailMedico}
              onChange={handleChange(setEmailMedico)}
              disabled={!editandoMedico}
            />

            <label>Telefone (com DDD)</label>
            <input
              type="text"
              placeholder="Digite seu número de telefone"
              value={telefoneMedico}
              onChange={handleChange(setTelefoneMedico)}
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

        <div className="container-alinhamento-dois-perfilMedico">

          <div className="alinhamento-inputs-medicos">
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

        <div className="container-alinhamento-tres-medico">
          <div className="container-foto-usuario-medico">
            <label>Escolha sua foto de perfil</label>
            <img src="icon_user.png" alt="foto de usuario" />
          </div>

          <div className="alinhamento-buttons-medicos">
            <button className="button-editar-medicos" onClick={editar} disabled={loadingMedico}>
              {editandoMedico ? 'SALVAR' : 'EDITAR'}
            </button>
            <button className="button-deletar-medicos" onClick={confirmarDeletarContaMedico} disabled={loadingMedico}>
              DELETAR
            </button>
          </div>
        </div>
      </div>
      
      {
        mostrarPopUpSalvoMedico && (
          <div className="container-PopSalvarPerfilMedico">
            <h2 className='FontePopPerfilMedicoSalvo'>Salvo com sucesso!</h2>
            <button className='buttonOkPerfilMedico' onClick={fecharPopUpSalvoMedico}>OK</button>
          </div>
        )
      }
      
      {
      mostrarPopDeletarMedico &&(
        <div className='Container-PopPerfilMedico'>
          <h3 className='FontePopPerfilMedico'>Tem certeza que deseja deletar a sua conta?</h3>
          <div className='ButtonsPopPerfilMedico'>
          <button className='buttonDeletarPerfilMedico' onClick={handleConfirmarDeletarMedico}>SIM</button>
          <button className='buttonNaoDeletarPerfilMedico' onClick={handleCancelarDelatarMedico}>NÃO</button>
          </div>
        </div>
      )
    }
    </div>
  );
}

export default Perfil_medico