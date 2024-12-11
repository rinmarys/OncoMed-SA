import React, { useState, useContext } from 'react';
import './CancelarConsulta.css';
import { GlobalContext } from '../contexts/GlobalContext';
import axios from 'axios';

function CancelarConsulta({ onClose, consultaId, onConsultaCancelada }) {
  const [emailPaciente, setEmailPaciente] = useState('');
  const [senhaPaciente, setSenhaPaciente] = useState('');
  const [mensagemErroCancelarConsultaPaciente, setMensagemErroCancelarConsultaPaciente] = useState('');
  const { usuario_logado } = useContext(GlobalContext);

  const cancelarConsultaPaciente = async () => {
    if (!emailPaciente || !senhaPaciente) {
      setMensagemErroCancelarConsultaPaciente('Por favor, preencha todos os dados!');
      return;
    }
    if (emailPaciente !== usuario_logado.email || senhaPaciente !== usuario_logado.senha) {
      setMensagemErroCancelarConsultaPaciente('Dados incorretos, tente novamente!');
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:3000/marcarConsulta/${consultaId}`);
      if (response.status === 200) {
        setMensagemErroCancelarConsultaPaciente('Consulta cancelada com sucesso!');
        onConsultaCancelada(consultaId); // Notificar al componente padre
        onClose(); // Cerrar el popup
      } else {
        setMensagemErroCancelarConsultaPaciente('Erro ao cancelar consulta, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao cancelar consulta:', error);
      setMensagemErroCancelarConsultaPaciente('Erro ao cancelar consulta, tente novamente.');
    }
  };

  return (
    <div className="pop-up-cancelar-consulta">
      <h1 className="cancelar-consulta-titulo">CANCELAR CONSULTA</h1>
      <div className="alinhar-imagem-telaCancelarConsulta">
        <div className="inputs-cancelarConsultaAdmin">
          <h3>Você tem certeza de que deseja cancelar esta consulta?</h3>
          <div className="inputs">
            <label>Confirme seu Email</label>
            <input
              type="text"
              placeholder="email@gmail.com"
              value={emailPaciente}
              onChange={(event) => setEmailPaciente(event.target.value)}
            />
          </div>
          <div className="inputs">
            <label>Confirme sua senha</label>
            <input
              type="password"
              placeholder="Digite a sua senha"
              value={senhaPaciente}
              onChange={(event) => setSenhaPaciente(event.target.value)}
              minLength={7} maxLength={12}
            />
          </div>
          <div className="botoes-telaCancelarConsulta">
            <button
              className="cancelar-consulta-botao-telaCancelarConsulta"
              onClick={cancelarConsultaPaciente}
            >
              CANCELAR CONSULTA
            </button>
            <button className="sair-botao-telaCancelarConsulta" onClick={onClose}>
              SAIR
            </button>
          </div>
        </div>
        <div className="alinhamento-img-cancelarConsultaAdmin">
          <img src="imagem-cancelar-consulta.svg" alt="Imagem de cancelar consulta" />
        </div>
      </div>
      <div className="mensagemErro-CancelarConsultaAdmin">{mensagemErroCancelarConsultaPaciente}</div>
    </div>
  );
}

export default CancelarConsulta;
