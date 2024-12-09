import CancelarConsulta from './CancelarConsulta';
import './Popup_MeusAgendamentos.css';
import React, { useState, useEffect } from 'react';

function Popup_MeusAgendamentos({ selectedDate, agendamentosDoDia }) {
  const [isOpen, setIsOpen] = useState(false);
  const [consultasDoDia, setConsultasDoDia] = useState([]);
  const [consultaId, setConsultaId] = useState('')
  const onConsultaCancelada = (idCancelada) => {
    setConsultasDoDia((prevConsultas) =>
      prevConsultas.filter((consulta) => consulta.id_consulta !== idCancelada)
    );
  };


  const handleOpenPopup = (id) => {
    setConsultaId(id);
    setIsOpen(true);
};

const handleClosePopup = () => {
    setIsOpen(false);
    setConsultaId(null);
    fetch_marcarConsulta();
};

  const fetch_marcarConsulta = async () => {
    try {
        const response = await axios.get('http://localhost:3000/marcarConsulta');
        setListaInformacoesMarcarConsulta(response.data);
    } catch (error) {
        console.error('Erro ao buscar marcarConsulta por ID:', error);
    }
};

  useEffect(() => {
    if (!selectedDate || !agendamentosDoDia) return;

    const dataSelecionada = new Date(selectedDate).toISOString().split('T')[0];

    // Filtra consultas do dia
    const consultasFiltradas = agendamentosDoDia.filter((agendamento) =>
      new Date(agendamento.data_agendamento).toISOString().split('T')[0] === dataSelecionada
    );

    setConsultasDoDia(consultasFiltradas);
  }, [selectedDate, agendamentosDoDia]);

  console.log('consultaId', consultaId)

  return (
    <div className="lifehak">
      {consultasDoDia.length > 0 ? (
        <div className="tudo-popup-meusagendamentos">
          <h1 className="titulo-meusagendamentos-h1">AGENDAMENTOS DO DIA</h1>
          {consultasDoDia.map((consulta, index) => (
            <div key={index} className="cada-agendamento-meusagendamentos">
              <div className="todas-infos-meusagendamentos">
                <h1 className="medico-meusagendamentos"> {consulta.medico ? consulta.medico : 'Médico não designado'}</h1>
                <div className="tipo-horario-meusagendamentos">
                  <h2 className="tipo-consulta-meusagendamentos">{consulta.tipo_consulta}</h2>
                  <h2 className="horario-meusagendamentos">{consulta.horario.slice(0, 5)}</h2>
                </div>
                <h3 className="titulo-observacao-meusagendamentos">SUA OBSERVAÇÃO</h3>
                <h3 className="observacao-meusagendamentos">{consulta.observacoes}</h3>

                <button
                  className='cancelar-meusagendamentos-popup'
                  onClick={() => handleOpenPopup(consulta.id_consulta)}
                  type="button"
                >
                  CANCELAR
                </button>

              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="tudo-popup-meusagendamentos">
          <h1 className="titulo-meusagendamentos-h1">AGENDAMENTOS DO DIA</h1>
          <h1 className="titulo-meusagendamentos-sem-consulta">Nenhuma consulta marcada para a data selecionada.</h1>
        </div>
      )}
      {isOpen && (
        <CancelarConsulta
          onClose={handleClosePopup}
          consultaId={consultaId}
          fetch_marcarConsulta={fetch_marcarConsulta}
          onConsultaCancelada={onConsultaCancelada}
        />
      )}
    </div>
  );
}

export default Popup_MeusAgendamentos;
